import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

export interface OutputProps {}

const Output: React.FC<OutputProps> = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return <Container>{count}</Container>;
};

export default Output;

const Container = styled.div``;
