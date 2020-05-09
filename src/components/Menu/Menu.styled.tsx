import React from "react";
import styled from "styled-components";

interface StyledMenuProps {
  shouldOpen: boolean;
}

const StyledMenu:React.FC<StyledMenuProps> = styled.nav<StyledMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.grey1};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  transition: opacity 0.5s ease-in-out;
  overflow-y: scroll;
  opacity: ${({ shouldOpen }) => (shouldOpen ? "1" : "0")};
  visibility: ${({ shouldOpen }) => (shouldOpen ? "visible" : "hidden")};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  div {
  align-self: center;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: color 0.2s linear;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.5rem;
    text-align: center;
  }
  
  &:hover {
  color: ${({ theme }) => theme.colors.grey2};
  }
  }
`;

export default StyledMenu;
