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
    quotes: IContentfulBase[];
    slug: string;
  }
}

interface ModalProps {
  modal: boolean;
  closeTo: string;
}


const Page : React.FC<Props> = ({ pageContext } : Props) => {
  const [isFirstRun, setIsFirstRun] = useState(true);
  const [quote, setQuote] = useState<IContentfulBase>();

  const { slug } = pageContext;

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

  const overviewPageLink = slug === "random" ? "random" : quote.category.slug;
  const overviewPageName = slug === "random" ? "Random" : quote.category.name;


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

            {!modal
            && (
            <Flex justifyContent="center" onClick={() => setIsFirstRun(true)} marginBottom={modal ? 50 : 0}>
              <LocalizedLink to={`/${overviewPageLink}`}>{`Get another random image / video / quote for "${overviewPageName}"`}</LocalizedLink>
            </Flex>
            )}

            {(quote) && (
            <QuoteContent quote={quote} modal={modal} slug={pageContext.slug} />
            )}


          </Box>
        </Layout>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default Page;
