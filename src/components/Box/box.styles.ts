import React from "react";

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";
import { SystemProps } from "@models/styledSystem";
import styled from "styled-components";

export const BoxComponent: React.FC<SystemProps> = styled.div<SystemProps>`
  box-sizing: border-box;
  min-width: 0;
  &&& {
    ${background}
    ${border}
    ${color}
    ${flexbox}
    ${grid}
    ${layout}
    ${position}
    ${shadow}
    ${space}
    ${typography}
  }
`;
