import React, { useState } from "react";
import Flex from "@components/Flex";
import { Logo } from "@components/Logo";
import Burger from "@components/Burger";
import { HeaderStyled } from "./header.styles";
import Headroom from "react-headroom";
import Box from "@components/Box";
import Menu from "@components/Menu";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Headroom disableInlineStyles>
        <HeaderStyled
          height="120PX"
          width={["0px", "100%", "100%", "100%",
            "100%", "100%", "1920px"]}
          paddingX={["10px", "10px", "10px", "0px", "0px", "0px", "0px"]}
        >

          <Flex
            width="100%"
            height={["40px", "40px", "60px", "100px", "100px", "120px", "120px"]}
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              height={["100%"]}
              flexDirection="column"
              justifyContent="center"
              width={["40px", "50px", "60px", "100px", "100px", "120px", "120px"]}
            >
              <Flex
                width="100%"
                flexDirection="row"
                justifyContent="center"
              >
                <a href="/">
                  <Logo width={80} />
                </a>
              </Flex>


            </Flex>

            <Box flex={1} />

            <Flex
              alignSelf="flex-end"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-end"
              height="100%"
              width={["40px", "40px", "60px", "100px", "100px", "120px", "120px"]}
            >
              <Flex
                width="100%"
                flexDirection="row"
                justifyContent="center"
              >


                <Burger open={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
              </Flex>


            </Flex>

          </Flex>

          <Menu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

        </HeaderStyled>
      </Headroom>
    </>
  );
};

export default Header;
