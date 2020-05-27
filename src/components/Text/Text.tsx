import React, { CSSProperties, ReactNode } from "react";

import { TextComponent, TextProps } from "./text.styles";

interface Props extends TextProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const Text = (props: Props) => <TextComponent data-testid="Text" {...props} />;

export default Text;
