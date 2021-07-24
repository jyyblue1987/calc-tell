import { FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../consts/styles";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <Container>
      <h2>Calculator</h2>
    </Container>
  );
};

export default Header;

const Container = styled.nav`
  color: ${COLORS.textPrimary};
  text-align: left;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  border: 1px dashed pink;
`;
