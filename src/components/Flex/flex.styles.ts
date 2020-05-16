import styled from "styled-components";
import { variant } from "styled-system";
import { SystemProps } from "@models/styledSystem";

import Box from "../Box";

export interface FlexProps extends SystemProps {
  variant?: string;
}

export const FlexComponent = styled(Box)<FlexProps>`
  display: flex;
  transition: all .3s ease-in-out;

  ${variant({
    variants: {
      center: {
        justifyContent: "center",
        alignItems: "center"
      },
      row: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }
    }
  })}
`;
