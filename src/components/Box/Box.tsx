import React, { ReactNode } from "react";
import { SystemProps } from "@models/styledSystem";
import { BoxComponent } from "./box.styles";

interface Props extends SystemProps {
  children?: ReactNode;
}

const Box = (props: Props) => <BoxComponent {...props} />;

export default Box;
