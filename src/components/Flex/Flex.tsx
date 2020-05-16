import React, { ReactNode } from "react";
import { FlexComponent, FlexProps } from "./flex.styles";

export interface ExtendedFlexProps extends FlexProps {
  children?: ReactNode;
  onClick?: Function;
}

const Flex = (props: ExtendedFlexProps) => <FlexComponent {...props} />;

export default Flex;
