import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";

import Flex from "@components/Flex";

interface Props {
  twitterHandle: string;
  url: string;
  title: string;
  tags: string[];
}

const ShareButtons: React.FC<Props> = ({ twitterHandle, url, title, tags } : Props) => (
  <Flex
    width={["200px", "200px", "200px", "200px", "100%", "100%", "100%"]}
    height={["200px", "200px", "200px", "200px", "100%", "100%", "100%"]}
    flexDirection={["column", "row", "row", "row", "row", "row", "row"]}
    justifyContent="center"
    flexWrap={["wrap", "wrap", "wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
    marginBottom={["0px", "0px", "0px", "0px", "50px", "50px", "50px"]}
  >
    <FacebookShareButton url={url}>
      <FacebookIcon />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <TwitterIcon />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon />
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon />
    </WhatsappShareButton>
  </Flex>
);

export default ShareButtons;
