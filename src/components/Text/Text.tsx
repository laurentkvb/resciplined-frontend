import React, { ReactNode } from "react";

import { TextComponent, TextProps } from "./text.styles";

interface Props extends TextProps {
  children?: ReactNode;
}

const Text = (props: Props) => <TextComponent data-testid="Text" {...props} />;

export default Text;
