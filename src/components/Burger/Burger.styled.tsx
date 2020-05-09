import React from "react";
import styled from "styled-components";

interface StyledBurgerProps {
  open: boolean;
  onClick?: () => void;
}

export const StyledBurger: React.FC<StyledBurgerProps> = styled.button<StyledBurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  z-index: 99999;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? theme.colors.white : theme.colors.white)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
