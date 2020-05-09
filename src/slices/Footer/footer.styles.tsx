import styled from "styled-components";
import { background, layout, space } from "styled-system";
import { SystemProps } from "@models/styledSystem";

interface IconProps extends SystemProps {
  variant?: string;
}

export const IconStyled = styled.div<IconProps>`
  box-sizing: border-box;
  min-width: 0;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
  &&& {
    ${background}
    ${layout}
    ${space}
  }
`;
