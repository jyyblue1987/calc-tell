import { FC } from "react";
import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../consts/styles";

export interface DepositFieldProps {
  onChange: (val: string) => void;    
}

const DepositField: FC<DepositFieldProps> = ({onChange}) => {
  return (
    <Container>
      <label>$</label>
      <Input onChange={(e) => onChange(e.target.value)} />            
    </Container>
  );
};

export default DepositField;

const Container = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  label {
    position: absolute;
    z-index: 1;
    left: 12px;
    color: ${COLORS.textPrimary};
    font-size: 18px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: ${DEFAULTS.btnHeight};
  position: relative;
  border-radius: ${DEFAULTS.btnRadius};
  text-indent: 24px;
  border-color: ${COLORS.bg};
  outline: none;
  border-style: solid;
  border-width: 2px;
  font-size: 18px;

  :focus {
    border-color: ${COLORS.textPrimary};
  }
`;
