import React, { useEffect, useState } from "react";
// import "./modal.css";


import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Box from "@components/Box";
import SEO from "@components/SEO";
import { IContentfulBase } from "@models/IContentfulBase";
import Layout from "@components/Layout";
import { randomArrayELementHelper } from "@utils/randomArrayElementHelper";
import QuoteContent from "@templates/QuoteContent";
import Flex from "@components/Flex";
import LocalizedLink from "@components/LocalizedLink";


interface Props {
  pageContext: {
    data: IContentfulBase;
    quotes: IContentfulBase[]
  }
}

interface ModalProps {
  modal: boolean;
  closeTo: string;
}


const Modal : React.FC<Props> = ({ pageContext } : Props) => {
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [quote, setQuote] = useState();


  useEffect(() => {
    if (isFirstRun) {
      setIsFirstRun(false);
      const quoteSet = randomArrayELementHelper(pageContext.quotes);

      setQuote(quoteSet);
    }
  }, [quote, pageContext.quotes, isFirstRun]);


  if (!quote) {
    return <Box />;
  }

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo } : ModalProps) => (
        <Layout fullWidth>


          <Box
            padding={[0, 0, 0, 0, 50, 50, 50]}
            zIndex={100}
            color="black"
            background="white"
            height="100%"
          >
            {modal ? (
              <Link to={closeTo}>
                Close
              </Link>
            ) : (
              <header />
            )}

            {/* {modal && <Test />} */}
            <SEO title={quote.title} />


            {quote && (
            <>

              <Flex justifyContent="center" onClick={() => setIsFirstRun(true)} marginBottom={50}>
                <LocalizedLink to={`/${quote.category.slug}`}>{`Get another random image / video / quote for "${quote.category.name}"`}</LocalizedLink>
              </Flex>

              <QuoteContent quote={quote} modal={modal} />
            </>
            )}


          </Box>
        </Layout>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default Modal;
