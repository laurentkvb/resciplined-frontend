import React from "react";
import config from "../../../config";
import { Link } from "gatsby";

import Box from "@components/Box";
import Flex from "@components/Flex";
import Text from "@components/Text";
import logo from "@assets/logo/favicon.png";
import { Icon } from "@components/Button/button.styles";

interface Props {
  onAction: Function;
}

const Header = ({ onAction = () => {} } : Props) => (
  <header id="header">
    <h1>
      <Link to="/">
        <Flex flexDirection="row" alignItems="center">
          <Box
            width="20px"
            height="20px"
            backgroundImage={`url(${logo})`}
            backgroundPosition="center"
            backgroundSize="contain"
          />
          <Box marginLeft="20px">
            <strong>{config.heading}</strong>
            <Box width="10px" />
            <Text variant="bodyS" fontFamily="Roboto">Be responsible & disciplined.</Text>
          </Box>

        </Flex>
      </Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Icon className="fas fa-info-circle" />
          <a
            href="#footer"
            onClick={(e) => onAction(e, "about")}
            className="icon fa-info-circle"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
