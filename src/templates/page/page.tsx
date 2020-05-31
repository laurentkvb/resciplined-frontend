import React, { useEffect, useState } from "react";
// import "./modal.css";


import { Link } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Box from "@components/Box";
import SEO from "@components/SEO";
import { IContentfulBase } from "@models/IContentfulBase";
import Layout from "@components/Layout";
import { quoteReducer } from "@utils/quoteReducer";
import { randomArrayELementHelper } from "@utils/randomArrayElementHelper";
import LocalizedLink from "@components/LocalizedLink";
import Flex from "@components/Flex";
import ShareButtons from "@components/ShareButtons";
import { quoteUrlHelper } from "@utils/quoteUrlHelper";


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

  const quoteSlice = quoteReducer(quote);

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


            {(modal && quote.__typename === "ContentfulWebsite")
            && <Box height={modal ? [0, 50, 50, 50, 50, 50, 50] : ""} />}

            {quoteSlice}

            {!modal && (
            <Flex justifyContent="center" onClick={() => setIsFirstRun(true)}>
              <LocalizedLink to={`/${quote.category.slug}`}>{`Get another random image / video / quote for "${quote.category.name}"`}</LocalizedLink>
            </Flex>
            )}

            <Flex justifyContent="center" marginX={10} marginY="30px">

              <ShareButtons twitterHandle="resciplined" url={quoteUrlHelper(quote)} title={quote.title} tags={[quote.category.name, "resciplined"]} />
            </Flex>

          </Box>
        </Layout>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default Modal;
