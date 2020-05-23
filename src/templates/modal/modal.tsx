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

export const richTextOptions = {
  renderNode: {
    [BLOCKS.HEADING_1]: ({}, children: ReactNode) => (
      <Text
        variant="quoteSmall"
        color="greenAccent"
        marginBottom="36px"
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
  const { image, youtubeVideoId } = quote;

  const videoSlice = youtubeVideoId !== null && <YouTube videoId={youtubeVideoId} opts={youtubeOptions} />;
  const imageSlice = image !== null && (
  <Box
    width="100%"
    height="500px"
    backgroundImage={`url(${image.file.url})`}
    backgroundPosition="center"
    backgroundSize="contain"
    backgroundRepeat="no-repeat"
  />
  );

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo } : ModalProps) => (
        <Box padding={50} zIndex={100} color="black">
          {modal ? (
            <Link to={closeTo}>
              Close
            </Link>
          ) : (
            <header />
          )}


          {imageSlice}
          {videoSlice}

          <Box>
            {description && documentToReactComponents(description.json, richTextOptions)}
            <Text variant="quoteSmall" color={modal ? "white" : "black"} textShadow="">{author && `${author}`}</Text>
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
