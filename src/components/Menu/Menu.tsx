import React from "react";
import "./headroom-styles.css";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import StyledMenu from "@components/Menu/Menu.styled";
import Text from "@components/Text";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu = ({ isOpen = false, toggleMenu } : Props) => {
  if (isOpen) {
    disableBodyScroll("main_body");
  } else {
    enableBodyScroll("main_body");
  }

  return (
    <StyledMenu shouldOpen={isOpen}>
      <div onClick={() => toggleMenu()}>
        <Text variant="h1"><a href="/">Home</a></Text>
      </div>

      <div>
        {/* <Text variant="h1"><a href="/cases">Cases</a></Text> */}
      </div>
    </StyledMenu>
  );
};
export default Menu;
