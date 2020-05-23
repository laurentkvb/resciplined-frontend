import styled from "styled-components";
import { SystemProps } from "@models/styledSystem";

import Box from "@components/Box";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 999px) {
    width: 100%;
    max-width: 1220px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  & > * + * {
    @media (min-width: 999px) {
      margin-left: 40px;
    }
  }
`;

export const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.blue5};
  font-size: 20px;
  line-height: 42px;
  margin: 40px 0;
  text-align: center;
  font-weight: bold;

  @media (min-width: 999px) {
    margin-top: 100px;
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    font-weight: bold;
  }
`;

export const FormColumn = styled(Box)<SystemProps>`
  width: 100%;
  margin-top: 16px;
  & > * + * {
    margin-top: 40px;
  }
`;
