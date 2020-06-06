import React, { useEffect, useState } from "react";
import { IContentfulBase } from "@models/IContentfulBase";
import Box from "@components/Box";
import Flex from "@components/Flex";
import Text from "@components/Text";
import LocalizedLink from "@components/LocalizedLink";
import ShareButtons from "@components/ShareButtons";
import { quoteUrlHelper } from "@utils/quoteUrlHelper";
import { quoteReducer } from "@utils/quoteReducer";
import CopyToClipboard from "react-copy-to-clipboard";
import Button from "@components/Button";

interface Props {
  quote: IContentfulBase;
  modal: boolean
}

const QuoteContent: React.FC<Props> = ({ quote, modal } : Props) => {
  const [isCopied, changeCopied] = useState<boolean>(false);

  const quoteSlice = quoteReducer(quote);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        changeCopied(false);
      }, 4000);
    }
  }, [isCopied]);


  return (
    <>
      {(modal && quote.__typename === "ContentfulWebsite") && <Box height={modal ? [0, 50, 50, 50, 50, 50, 50] : ""} />}


      {modal && (
      <Flex justifyContent="center" marginBottom="30px">
        <LocalizedLink to={`/${quote.category.slug}/${quote.id}`}>{"Go to Quote's page"}</LocalizedLink>

      </Flex>
      )}
      {quoteSlice}


      <Flex justifyContent="center">
        <LocalizedLink to={`/${quote.category.slug}`}>{`Go to '${quote.category.name}' page`}</LocalizedLink>
      </Flex>


      <Flex justifyContent="center" marginX={10} marginY="30px" flexDirection="column" alignItems="center">
        <ShareButtons
          twitterHandle="resciplined"
          url={quoteUrlHelper(quote)}
          title={quote.title}
          tags={[quote.category.name, "resciplined"]}
        />


        <CopyToClipboard
          onCopy={() => changeCopied(true)}
          options={{ message: "Copied to clipboard!" }}
          text={quoteUrlHelper(quote)}
        >
          <Button style={{ whiteSpace: "pre-line", height: 64 }}>Copy url to clipboard</Button>

        </CopyToClipboard>


      </Flex>
      {isCopied && (
      <Flex justifyContent="center">
        <Text variant="h4" fontWeight="bold" textAlign="center">Url copied!</Text>
        {" "}
      </Flex>
      )}


    </>
  );
};


export default QuoteContent;
