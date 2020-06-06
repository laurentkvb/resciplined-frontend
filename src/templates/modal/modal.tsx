import React from "react";
import "./modal.css";


import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Box from "@components/Box";
import Text from "@components/Text";
import SEO from "@components/SEO";
import { IContentfulBase } from "@models/IContentfulBase";
import Layout from "@components/Layout";
import QuoteContent from "@templates/QuoteContent";
import Flex from "@components/Flex";


interface Props {
  pageContext: {
    data: IContentfulBase;
    slug: string;
    isDetailPage: boolean;
  }
}

interface ModalProps {
  modal: boolean;
  closeTo: string;
}


const Modal : React.FC<Props> = ({ pageContext } : Props) => {
  const quote: IContentfulBase = pageContext.data;

  const { isDetailPage } = pageContext;

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo } : ModalProps) => (
        <Layout fullWidth>

          <Box padding={[0, 0, 0, 0, 50, 50, 50]} zIndex={100} color="black" background="white" height="100%">
            {modal ? (
              <Flex flexDirection="row" width="100%" justifyContent={"space-between"} marginBottom="20px">

                <Box alignSelf="flex-start">
                  <Link to={closeTo}>
                    Close
                  </Link>
                </Box>

                <Box alignSelf="flex-end">
                  <Text
                    variant="bodySmall"
                    display={["none", "none", "none",
                      "none", "block", "block", "block"]}
                    style={{ textDecoration: "underline" }}
                  >
                    Press ESC on your keyboard to close the window
                  </Text>

                </Box>

              </Flex>
            ) : (
              <header />
            )}
            <SEO title={quote.title} />

            <QuoteContent quote={quote} modal={modal} slug={pageContext.slug} isDetailPage={isDetailPage} />

          </Box>
        </Layout>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default Modal;
