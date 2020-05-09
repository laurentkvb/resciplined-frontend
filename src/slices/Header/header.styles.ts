import styled from "styled-components";
import { layout, LayoutProps, space, SpaceProps } from "styled-system";

type MainHeaderProps = LayoutProps & SpaceProps;

export const HeaderStyled = styled.header<MainHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.grey5};
  padding-top: 32px;
  padding-bottom: 32px;

  &&& {
    ${layout}
    ${space}
  }
`;
