import React from "react";

import logo from "@assets/logo-large.png";
import { SystemProps } from "@models/styledSystem";
import styled from "styled-components";

interface Props extends SystemProps {
  src?: string;
  width?: number;
}

const LogoImage: React.FC<Props> = styled.img<Props>`
filter: invert(100%)`; // instead of black color, logo should have white color

const Logo = ({ width }: Props) => (
  <LogoImage
    src={logo}
    width={width || undefined}
    data-testid="Logo"
  />
);

export default Logo;
