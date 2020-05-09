import styled from "styled-components";

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant
} from "styled-system";

type SystemProps = BackgroundProps &
BorderProps &
ColorProps &
LayoutProps &
ShadowProps &
SpaceProps &
TypographyProps;

interface ButtonProps extends SystemProps {
  variant?: string
}

type IconProps = SpaceProps & TypographyProps;

export const ButtonStyled = styled.button<ButtonProps>`
  box-sizing: border-box;
  min-width: 0;
  transition: transform .3s ease-in-out;

  ${variant({
    variants: {
      primary: {
        backgroundColor: "primary",
        color: "white",
        fontSize: 1
      },
      tertiary: {
        backgroundColor: "tertiary",
        color: "white",
        fontSize: 1
      },
      text: {
        backgroundColor: "transparent",
        fontSize: 2
      }
    }
  })}

  &:hover {
    transform: scale(1.1);
  }

  &&& {
    ${background}
    ${border}
    ${color}
    ${layout}
    ${shadow}
    ${space}
    ${typography}
  }
`;

export const Icon = styled.i<IconProps>`
  &&& {
    ${space}
    ${typography}
  }
`;
