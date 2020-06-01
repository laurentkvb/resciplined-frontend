import React from "react";
import { IContentfulBase } from "@models/IContentfulBase";
import Box from "@components/Box";
import Flex from "@components/Flex";
import LocalizedLink from "@components/LocalizedLink";
import ShareButtons from "@components/ShareButtons";
import { quoteUrlHelper } from "@utils/quoteUrlHelper";
import { quoteReducer } from "@utils/quoteReducer";

interface Props {
  quote: IContentfulBase;
  modal: boolean
}

const QuoteContent: React.FC<Props> = ({ quote, modal } : Props) => {
  const quoteSlice = quoteReducer(quote);

  return (
    <>
      {(modal && quote.__typename === "ContentfulWebsite") && <Box height={modal ? [0, 50, 50, 50, 50, 50, 50] : ""} />}


      {quoteSlice}

      {modal && (
        <Flex justifyContent="center">
          <LocalizedLink to={`/${quote.category.slug}`}>{`Go to '${quote.category.name}' page`}</LocalizedLink>
        </Flex>
      )}


      <Flex justifyContent="center" marginX={10} marginY="30px">
        <ShareButtons
          twitterHandle="resciplined"
          url={quoteUrlHelper(quote)}
          title={quote.title}
          tags={[quote.category.name, "resciplined"]}
        />

      </Flex>


    </>
  );
};


export default QuoteContent;
