import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

export interface OutputProps {}

const Output: React.FC<OutputProps> = () => {
  const {borrow, income} = useSelector((state: RootState) => state.counter);

  return <Container>
            <p>Here's what you can borrow</p>
            ${borrow}
            
            <p style={{marginTop: 20}}>Total income</p>
            ${income}
          </Container>;
};

export default Output;

const Container = styled.div`
  background-color: #DCDCDC;
  padding: 20px;
  border-radius: 10px;    
`;
