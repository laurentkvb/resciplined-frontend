import React from "react";
import "./modal.css";


import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Box from "@components/Box";
import SEO from "@components/SEO";
import { IContentfulBase } from "@models/IContentfulBase";
import Layout from "@components/Layout";
import { quoteReducer } from "@utils/quoteReducer";
import LocalizedLink from "@components/LocalizedLink";
import Flex from "@components/Flex";


interface Props {
  pageContext: {
    data: IContentfulBase;
  }
}

interface ModalProps {
  modal: boolean;
  closeTo: string;
}


const Modal : React.FC<Props> = ({ pageContext } : Props) => {
  const quote: IContentfulBase = pageContext.data;

  const quoteSlice = quoteReducer(quote);

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo } : ModalProps) => (
        <Layout fullWidth>

          <Box padding={[0, 0, 0, 0, 50, 50, 50]} zIndex={100} color="black" background="white" height="100%">
            {modal ? (
              <Link to={closeTo}>
                Close
              </Link>
            ) : (
              <header />
            )}

            {/* {modal && <Test />} */}
            <SEO title={quote.category} />


            {(modal && quote.__typename === "ContentfulWebsite") && <Box height={modal ? [0, 50, 50, 50, 50, 50, 50] : ""} />}


            {quoteSlice}
            {modal && (
            <Flex justifyContent="center">
              <LocalizedLink to={`/${quote.category.slug}`}>{`Go to '${quote.category.name}' page`}</LocalizedLink>
              {" "}
            </Flex>
            )}


          </Box>
        </Layout>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default Modal;
