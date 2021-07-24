import { FC } from "react";
import Button from "../components/Button/Button";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Label from "../components/Label/Label";
import InputField from "../components/InputField/InputField";
import Output from "../components/Output/Output";
import { useDispatch } from "react-redux";
import { increment, salaryChange } from "../store/store";

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <Header />
        <section>
          <FormContainer>
            <Label text="How many of you are buying the property?" />
            <span>
              <Button
                title="Just Me"
                name="option1"
                onClick={() => dispatch(increment())}
              />
              <Button
                title="Just Me 2"
                name="option1"
                onClick={() => dispatch(increment())}
              />
              {/* <Button title="I'm buying with someone" name="option1" /> */}
            </span>
            <Label text="What's your base salary/wages? (before tax)" />
            <span>
              <InputField onChange={(val: string) => dispatch(salaryChange(Number(val))) } />
            </span>
          </FormContainer>
          <CalculationContainer>            
            <Output />
          </CalculationContainer>
        </section>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 3px 6px -2px grey;

  section {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const Content = styled.div`
  width: 1200px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  span {
    display: flex;
    flex-direction: row;
  }
`;

const CalculationContainer = styled.div`
  border: 1px dashed green;
  width: 40%;
  padding: 10px;  
`;
