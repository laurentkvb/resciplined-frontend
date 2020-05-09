import React, { ReactNode } from "react";
import { SystemProps } from "@models/styledSystem";
import { BoxComponent } from "./box.styles";

interface Props extends SystemProps {
  children?: ReactNode;
}

export const Box = (props: Props) => <BoxComponent {...props} />;
