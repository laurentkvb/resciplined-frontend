import React, { forwardRef, useState } from "react";

import {
  InputWrapper,
  Label,
  Input,
  TextArea,
  ErrorMessage
} from "./form-field.styles";
import { useField, FieldInputProps } from "formik";
import { useSpring } from "react-spring";
import theme from "../../styles/theme";
import Box from "@components/Box";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FormFieldProps extends FieldInputProps<any> {
  label: string;
  type: string;
  height?: string;
}

/**
 * Form field component.
 *
 * @author Matt Hamers
 */
export const FormInput: React.FC<FormFieldProps> = (
  { label, type, height = "60px", ...props }: FormFieldProps,
  ref
) => {
  const [field, meta] = useField(props);
  const [isActive, setIsActive] = useState(false);

  const isError = meta.touched && meta.error;
  const borderColor = isError ? theme.colors.pink : "black";

  const animation = useSpring({
    transform: isActive ? "translateY(-25px)" : "translateY(0px)",
    fontSize: isActive ? "14px" : "16px",
    color: isActive ? theme.colors.grey3 : "white"
  });

  const inputProps = {
    ref,
    type,
    ...field,
    ...props,
    borderColor
  };

  const getInput = () => {
    switch (type) {
      case "textarea":
        return <TextArea {...inputProps} />;
      default:
        return <Input {...inputProps} />;
    }
  };

  return (
    <>
      <Box marginTop="16px" />
      <InputWrapper height={height} onFocus={() => setIsActive(true)}>
        <Label style={animation} htmlFor={field.name}>
          {label}
        </Label>
        {getInput()}
        {meta.touched && meta.error ? (
          <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}
      </InputWrapper>
    </>
  );
};

export const FormField = forwardRef(FormInput);
