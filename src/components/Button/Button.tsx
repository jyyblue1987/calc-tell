import { FC } from "react";
import styled from "styled-components";
import { COLORS, DEFAULTS } from "../../consts/styles";

export interface Button2Props {
  title: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name: string;
  onClick: () => void;
}

const Button: FC<Button2Props> = ({ title, checked, name, onClick }) => {
  return (
    <>
      <Container onClick={() => onclick}>
        <input
          type="radio"
          value={title}
          id={title}
          name={name}
          defaultChecked={checked}
          onChange={() => onClick()}
        />
        <label htmlFor={title} onClick={() => onclick}>
          {title}
        </label>
      </Container>
    </>
  );
};

export default Button;

const Container = styled.div`
  width: 100%;

  label {
    width: 100%;
    height: ${DEFAULTS.btnHeight};
    background-color: ${COLORS.inactiveBtn};
    color: ${COLORS.textInactive};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: ${DEFAULTS.btnRadius};
  }

  input {
    position: fixed;
    :checked + label {
      background-color: ${COLORS.activeBtn};
      color: ${COLORS.textActiveBtn};
    }
  }
`;
