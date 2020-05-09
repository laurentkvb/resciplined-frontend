import styled from "styled-components";
import { variant, color, typography, space, layout } from "styled-system";
import { SystemProps } from "@models/styledSystem";
import React from "react";


export interface TextProps extends SystemProps {
  variant?: string | string[];
}

export const TextComponent: React.FC<TextProps> = styled.span<TextProps>`
  ${variant({
    variants: {
      h1: {
        display: "block",
        fontFamily: "Andada",
        fontSize: ["0px", "70px", "70px", "85px", "110px", "110px", "110px"],
        lineHeight: ["0px", "63px", "63px", "63px", "94px", "94px", "94px"],
        fontWeight: 600,
        textTransform: "uppercase"
      },
      h2: {
        display: "block",
        fontFamily: "Andada",
        fontSize: ["0px", "60px", "60px", "60px", "80px", "80px", "80px"],
        lineHeight: ["0px", "50px", "50px", "50px", "70px", "70px", "70px"],
        fontWeight: 600,
        textTransform: "uppercase"
      },
      h3: {
        display: "block",
        fontFamily: "Crimson",
        fontSize: ["0px", "50px", "50px", "50px", "60px", "60px", "60px"],
        lineHeight: ["0px", "50px", "50px", "50px", "56px", "56px", "56px"],
        fontWeight: 800,
      },
      bodyL: {
        display: "inline",
        fontFamily: "Crimson",
        fontSize: ["0px", "22px", "22px", "22px", "28px", "28px", "28px"],
        lineHeight: ["0px", "28px", "28px", "28px", "37px", "37px", "37px"],
        fontWeight: 300,
      },
      bodyM: {
        display: "inline",
        fontFamily: "Crimson",
        fontSize: ["0px", "18px", "18px", "18px", "24px", "24px", "24px"],
        lineHeight: ["0px", "24px", "24px", "24px", "29px", "29px", "29px"],
        fontWeight: 300,
      },
      bodyS: {
        display: "inline",
        fontFamily: "Crimson",
        fontSize: ["0px", "16px", "16px", "16px", "18px", "18px", "18px"],
        lineHeight: ["0px", "20px", "20px", "20px", "24px", "24px", "24px"],
        fontWeight: 300,
      },
    }
  })}
  &&& {
    ${color}
    ${typography}
    ${space}
    ${layout}
  }
`;
