import React, { useState } from "react";
import * as Yup from "yup";
import { FormField } from "@components/FormField";
import { Formik, FormikHelpers } from "formik";
import axios from "@utils/axios";

import { FormColumn, FormWrapper } from "./form-contact.styles";
import Flex from "@components/Flex";
import Button from "@components/Button";
import Text from "@components/Text";

import { AxiosResponse } from "axios";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const FormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  company: Yup.string(),
  phone: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
  message: Yup.string().required("Please leave a message")
});

export const FormContact = () => {
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmitLogic = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const formData = {
      fullName: values.name,
      emailAddress: values.email,
      message: values.message,
    };


    await axios.post("", formData)
      .then((response: AxiosResponse) => {
        if (!(response.data && response.data.ok && response.data.ok === true)) {
          setSubmitMessage("Form could not be sent");
          return false;
        }

        actions.resetForm();
        setSubmitMessage("Form has been successfully sent");
        return true;
      })
      .catch((err: string) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setSubmitMessage("Form could not be sent");
      });
  };


  return (
    <Flex flexDirection="column" width="100%">
      <Formik
        initialValues={{
          name: "",
          email: "",
          company: "",
          phone: "",
          message: ""
        }}
        validationSchema={FormSchema}
        onSubmit={(values: FormValues,
          actions: FormikHelpers<FormValues>) => handleSubmitLogic(values, actions)}
      >
        {({ errors, touched,
          isSubmitting, handleBlur,
          handleChange,
          values,
          handleSubmit }) => (
            <Flex flexDirection="column">
              <FormWrapper onSubmit={handleSubmit}>
                <FormColumn>
                  <FormField
                    label="Full name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />

                  <FormField
                    label="Email address"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  <FormColumn
                    height={["100px", "100px", "100px", "100px", "60px", "60px", "60px"]}
                    marginTop={["40px", "40px", "40px", "40px", "0px", "0px", "0px"]}
                    marginBottom={["30px", "30px", "30px", "30px", "0px", "0px", "0px"]}
                    width="column12"
                  >
                    <FormField
                      height="100%"
                      label="Message"
                      type="textarea"
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                  </FormColumn>
                </FormColumn>
              </FormWrapper>
              <Flex
                flexDirection="row"
                justifyContent="start"
                marginTop={["64px", "64px", "64px", "64px", "0px", "0px", "0px"]}
              >
                <Button
                  variant="primary"
                  disabled={
                   isSubmitting || !!(errors.name && touched.name)
                   || !!(errors.email && touched.email)
                  }
                  onClick={handleSubmit}
                >
                  Send Message
                </Button>
                {(submitMessage !== "")
            && (
            <Flex
              backgroundColor="black"
              border="2px solid black"
              borderRadius="5px"
              padding="10px"
              marginLeft="20px"
            >

              <Text
                variant="h3"
                color="greenAccent"
                fontSize="16px"
                lineHeight="30px"
              >
                {submitMessage}
              </Text>
            </Flex>
            )}
              </Flex>
            </Flex>
        )}
      </Formik>

    </Flex>

  );
};

export default FormContact;
