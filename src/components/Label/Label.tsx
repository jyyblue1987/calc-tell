import { FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../consts/styles";

export interface LabelProps {
  text: string;
}

const Label: FC<LabelProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Label;

const Container = styled.h4`
  color: ${COLORS.textPrimary};
  padding: 0;
  margin: 6px 0 3px 0;
`;
