import React, { ReactNode } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ModalRoutingContext } from "gatsby-plugin-modal-routing";
import Text from "@components/Text";

import "./style.css";
import Box from "@components/Box";
import YouTube, { Options } from "react-youtube";
import { IQuotePage } from "@models/IQuotePage";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SEO } from "@components/SEO";

export const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: ({}, children: ReactNode) => (
      <Text
        variant="quoteAuthor"
        color="greenAccent"
        marginBottom="10px"
      >
        {children}
      </Text>
    ),
    [BLOCKS.PARAGRAPH]: ({}, children: ReactNode) => (
      <Box marginBottom="36px" width="100%">
        <Text variant="quote" color="black">{children}</Text>
      </Box>
    )
  }
};


const youtubeOptions : Options = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

interface Props {
  data: any;
}

interface ModalProps {
  modal: boolean;
  closeTo: string;
}

const Modal : React.FC<Props> = ({ data } : Props) => {
  useStaticQuery(pageQuery);

  const quote: IQuotePage = data.contentfulPage;
  const description = quote.description ? quote.description : "";
  const author = quote.author ? quote.author : "";

  const videoSlice = quote.youtubeVideoId !== null && <YouTube videoId={quote.youtubeVideoId} opts={youtubeOptions} />;
  const imageSlice = quote.image !== null && (
  <Box
    width="100%"
    height="500px"
    backgroundImage={`url(${quote.image.file.url})`}
    backgroundPosition="center"
    backgroundSize="contain"
    backgroundRepeat="no-repeat"
  />
  );

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo } : ModalProps) => (
        <Box padding={[0, 0, 0, 0, 50, 50, 50]} zIndex={100} color="black">
          {modal ? (
            <Link to={closeTo}>
              Close
            </Link>
          ) : (
            <header />
          )}
          <SEO title={quote.type} />


          {imageSlice}
          {videoSlice}

          <Box>
            {description && documentToReactComponents(description.json, richTextOptions)}
            <Text variant="quoteAuthor" color="black" textShadow="">{author && `${author}`}</Text>
          </Box>


          <Link to="/">Go back to the homepage</Link>

        </Box>
      )}
    </ModalRoutingContext.Consumer>
  );
};

export default Modal;

export const pageQuery = graphql`
query getPageQuote($id: String) {

  contentfulPage(id: {eq: $id}) {
    type
    author
    description {
      json
    } 
    image {
      file {
        url
      }
    }
    youtubeVideoId
  }
  
}

`;
