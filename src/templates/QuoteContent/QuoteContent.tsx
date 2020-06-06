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
  modal: boolean;
  slug: string;
  isDetailPage: boolean;
}

const QuoteContent: React.FC<Props> = ({ quote, modal, slug, isDetailPage }: Props) => {
  const [isCopied, changeCopied] = useState<boolean>(false);
  const quoteSlice = quoteReducer(quote);

  const overviewPageLink = slug === "random" ? "random" : quote.category.slug;
  const overviewPageName = slug === "random" ? "Random" : quote.category.name;

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        changeCopied(false);
      }, 4000);
    }
  }, [isCopied]);

  return (
    <>
      {modal && quote.__typename === "ContentfulWebsite" && (
        <Box height={modal ? [0, 50, 50, 50, 50, 50, 50] : "0px"} />
      )}

      {(!isDetailPage || modal) && (
      <Flex justifyContent="center" marginBottom="30px">
        <LocalizedLink to={`/${quote.category.slug}/${quote.id}`}>
          {"Go to Quote's page"}
        </LocalizedLink>
      </Flex>
      )}

      {quoteSlice}

      {(!modal && slug !== "random") && (
      <Flex justifyContent="center">
        <LocalizedLink
          to={`/${overviewPageLink}`}
        >
          {`Go to '${overviewPageName}' page`}
        </LocalizedLink>
      </Flex>
      )}

      <Flex
        justifyContent="center"
        marginX={10}
        marginY="30px"
        flexDirection="column"
        alignItems="center"
      >
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
          <Button style={{ whiteSpace: "pre-line", height: 64 }}>
            Copy url to clipboard
          </Button>
        </CopyToClipboard>
      </Flex>
      {isCopied && (
        <Flex justifyContent="center">
          <Text variant="h4" fontWeight="bold" textAlign="center">
            Url copied!
          </Text>
        </Flex>
      )}
    </>
  );
};

export default QuoteContent;
