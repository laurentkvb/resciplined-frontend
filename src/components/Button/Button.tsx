import React from "react";

import { ButtonStyled, Icon } from "./button.styles";

interface Props {
  children: React.ReactNode;
  leadingIcon?: string;
  onClick: Function;
  variant?: string;
}

const Button = ({ children, leadingIcon, onClick, variant = "primary", ...props }: Props) => (
  <ButtonStyled
    variant={variant}
    type="submit"
    onClick={() => onClick()}
    fontWeight="bold"
    fontSize={["19px", "19px"]}
    border={["1px solid"]}
    borderColor={["pink"]}
    backgroundColor={["black"]}
    borderRadius="44px"
    color="white"
    height="55px"
    textAlign="center"
    width={[170]}
    {...props}
  >
    {leadingIcon && (
      <Icon fontSize={2} marginRight={3} className={leadingIcon} />
    )}
    {children}
  </ButtonStyled>
);

export default Button;
