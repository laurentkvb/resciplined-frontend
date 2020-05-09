import React from "react";
import { StyledBurger } from "./Burger.styled";

interface Props {
  open: boolean;
  toggleMenu: () => void;
}

const Burger = ({ open, toggleMenu } : Props) => (
  <StyledBurger open={open} onClick={() => toggleMenu()}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;
