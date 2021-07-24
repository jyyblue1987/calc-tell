import { FC } from "react";
import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../consts/styles";

export interface OtherFieldProps {
  onChange: (val: string) => void;
  onPeriodChange: (val: number) => void;
  onDelete: () => void;
}

const OtherField: FC<OtherFieldProps> = ({onChange, onPeriodChange, onDelete}) => {
  return (
    <Container>
      <label>$</label>
      <Input onChange={(e) => onChange(e.target.value)} />
      <select name="cars" id="cars" onChange={(e) => onPeriodChange(parseInt(e.target.value))}>
        <option value="1">per year</option>
        <option value="52">per week</option>
      </select>
      <button onClick={onDelete}>x</button>
    </Container>
  );
};

export default OtherField;

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

  select {
    position: absolute;
    z-index: 1;
    right: 30px;
    color: ${COLORS.textPrimary};
    font-size: 18px;
    border: none;
    outline: none;
    height: ${DEFAULTS.btnHeight};
    :hover {
      cursor: pointer;
    }
  }
  button {
    position: absolute;
    right: 5px;
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
