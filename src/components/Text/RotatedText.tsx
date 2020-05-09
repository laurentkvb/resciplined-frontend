import styled from "styled-components";
import { color, flex, layout, position, space, typography } from "styled-system";
import { SystemProps } from "@models/styledSystem";
import React from "react";

const RotatedText : React.FC<SystemProps> = styled.div<SystemProps>`

    transform: rotate(90deg);
    z-index: 100;
    font-weight: bold;
    width: 200px;
    font-size: 30px;
    
   
    &&& {
    ${color}
    ${layout}
    ${position}
    ${space}
    ${flex}
    ${typography}
  }
`;

export default RotatedText;
