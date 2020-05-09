import React from "react";
import { Box } from "@components/Box";
import { Logo } from "@components/Logo";
import { Flex } from "@components/Flex";
import Text from "@components/Text";

import placeholder from "@assets/logo.png";

import { IconStyled } from "./footer.styles";

const placeholderAsset = `url(${placeholder})`;

const Footer = () => (
  <Box marginTop={["150px", "150px"]}>
    <Flex
      width="100%"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
    >
      <a href="/" style={{ height: "100%" }}>
        <Logo width={56} />
      </a>
    </Flex>
    <Flex
      flexWrap="wrap"
      width="100%"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      color="white"
      flexDirection={["column", "row"]}
      pt={20}
    >
      <Text
        variant="bodyS"
        color="black"
      >
        <a
          href="/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Privacy Statement
        </a>
      </Text>
    </Flex>
    <Flex
      flexWrap="wrap"
      width="100%"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      color="white"
      paddingTop="30px"
      paddingBottom="30px"
    >
      <Box>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <IconStyled
            backgroundSize="cover"
            backgroundImage={placeholderAsset}
            color="black"
            height="35px"
            width="35px"
          />
        </a>
      </Box>
      <Box paddingX="20px">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <IconStyled
            backgroundSize="cover"
            backgroundImage={placeholderAsset}
            height="35px"
            width="35px"
          />
        </a>
      </Box>
      <Box>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <IconStyled
            backgroundSize="cover"
            backgroundImage={placeholderAsset}
            height="35px"
            width="35px"
          />
        </a>
      </Box>
    </Flex>
  </Box>
);

export default Footer;
