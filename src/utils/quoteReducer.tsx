import React, { ReactNode } from "react";
import { IContentfulBase } from "@models/IContentfulBase";
import { IContentfulVideo } from "@models/IContentfulVideo";
import { IContentfulImage } from "@models/IContentfulImage";
import { IContentfulText } from "@models/IContentfulText";

import YouTube, { Options } from "react-youtube";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import Box from "@components/Box";
import Flex from "@components/Flex";
import Text from "@components/Text";

const youtubeOptions : Options = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: ({}, children: ReactNode) => (
      <Text
        variant="quoteAuthor"
        color="greenAccent"
        marginBottom="10px"
        textAlign="center"
      >
        {children}
      </Text>
    ),
    [BLOCKS.PARAGRAPH]: ({}, children: ReactNode) => (
      <Box marginBottom="36px" width="100%">
        <Text
          variant="quote"
          color="black"
          textAlign="center"
        >
          {children}
        </Text>
      </Box>
    )
  }
};


const getYoutubeUrl = (url: string) => url.split("v=")[1];

export const quoteReducer = (quote: IContentfulBase) => {
  switch (quote.__typename) {
    case "ContentfulVideo":
      return (
        <YouTube
          videoId={getYoutubeUrl((quote as IContentfulVideo).url)}
          opts={youtubeOptions}
        />
      );
    case "ContentfulImage":
      return (
        <Box
          width="100%"
          height="400px"
          backgroundImage={`url(${(quote as IContentfulImage).image.file.url})`}
          backgroundPosition="center"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
        />
      );
    case "ContentfulWebsite":
      return (
        <Box>
          {/* <blockquote className="reddit-card" data-card-created="1590310094"> */}
          {/*  <a */}
          {/*    href="https://www.reddit.com/r/selfimprovement/comments/gpaspb/i_challenged_myself_to_run_everyday_for_30_days/?ref=share&ref_source=embed" */}
          {/*  > */}
          {/*    I */}
          {/*    Challenged Myself to Run Everyday for 30 days. It Ended up Changing My Life */}
          {/*  </a> */}
          {/*  from */}
          {/*  <a */}
          {/*    href="http://www.reddit.com/r/selfimprovement" */}
          {/*  > */}
          {/*    r/selfimprovement */}
          {/*  </a> */}
          {/* </blockquote> */}
        </Box>
      );
    case "ContentfulText":
      return (
        <Box marginBottom="50px">
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignContent="center"
          >
            {documentToReactComponents((quote as IContentfulText)
              .description.json, richTextOptions)}

            <Text
              variant="quoteAuthor"
              color="black"
              textShadow=""
              textAlign="center"
            >

              {(quote as IContentfulText).author && `- ${(quote as IContentfulText).author}` }
            </Text>
          </Flex>
        </Box>
      );
    default:
      return <Box />;
  }
};
