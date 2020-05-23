import styled from "styled-components";
import css from "@styled-system/css";
import { animated } from "react-spring";
import { SystemProps } from "@models/styledSystem";

import Box from "@components/Box";

const commonStyles = css({
  color: "white",
  // backgroundColor: "black"
});

interface InputWrapperProps extends SystemProps {
  height: string;
  onFocus: () => void;
}

export const InputWrapper = styled(Box)<InputWrapperProps>`
  position: relative;
  width: 100%;
`;

export const Label = styled(animated.label)`
  position: absolute;
  //margin: 10px 20px;
  padding: 0 10px;
  font-size: 14px;
  z-index: 1;
  display: flex;
  align-items: center;
  // background-color: ${({ theme }) => `${theme.colors.blackTemplate}`};
  pointer-events: none;
`;

interface InputProps {
  borderColor: string;
}

export const Input = styled.input<InputProps>`
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  color: white;
  font-family: Roboto,serif;
  font-weight: bold;
  line-height: 42px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 3px;
  padding-left: 20px;

  &:focus {
  border-top: 1px solid black;
  border-bottom: ${({ theme }) => `5px solid ${theme.colors.pink}`};
  }
  ${commonStyles}
`;

interface TextAreaProps {
  borderColor: string;
}

export const TextArea = styled.textarea<TextAreaProps>`
  display: block;
  left: 0;
  height: 100%;
  width: 100%;
  color: white;
  font-family: Roboto ,serif;
  font-weight: bold;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 3px;
  padding-left: 20px;
  padding-top: 20px;
  resize: vertical;
  background-color: ${({ theme }) => `${theme.colors.blackTemplate2}`};

  &:focus {
  border-top: 1px solid black;
  border-bottom: ${({ theme }) => `5px solid ${theme.colors.pink}`};  }
  ${commonStyles}
`;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -22px;
  font-size: 12px;
  color: ${({ theme }) => `${theme.colors.pink}`};  }
`;
