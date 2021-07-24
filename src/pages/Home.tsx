import { FC, useState } from "react";
import Button from "../components/Button/Button";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Label from "../components/Label/Label";
import InputField from "../components/InputField/InputField";
import Output from "../components/Output/Output";
import { useDispatch } from "react-redux";
import { increment, salaryChange, salary2Change, otherIncomeChange, salaryPeriodChange, salary2PeriodChange, otherIncomePeriodChange } from "../store/store";

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();

  const [mode, setMode] = useState(1);
  const [other, setOther] = useState(0);

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
                onClick={() => {
                  setMode(1);
                  dispatch(salary2Change(0));
                }}
              />
              <Button
                title="I am buing with someone"
                name="option1"
                onClick={() => {
                  setMode(2);
                  dispatch(salary2Change(0));
                }}
              />
              {/* <Button title="I'm buying with someone" name="option1" /> */}
            </span>
            <Label text="What's your base salary/wages? (before tax)" />
            <span>
              <InputField onChange={(val: string) => dispatch(salaryChange(Number(val))) } 
                    onPeriodChange={(val: number) => dispatch(salaryPeriodChange(val)) } />
            </span>
            {
              mode === 2 &&
              <div>
                <Label text="What's the second applicant's base salary/wages? (before tax)" />
                <span>
                  <InputField onChange={(val: string) => dispatch(salary2Change(Number(val))) }
                    onPeriodChange={(val: number) => dispatch(salary2PeriodChange(val)) }
                     />
                </span>
              </div>
            }

            <Label text="Other income #1" />
            <span>
              <Button
                title="Yes"
                name="option1"
                onClick={() => {
                  setOther(1);
                  dispatch(otherIncomeChange(0));
                }}
              />
              <Button
                title="No"
                name="option1"
                onClick={() => {
                  setOther(2);
                  dispatch(otherIncomeChange(0));
                }}
              />
              {/* <Button title="I'm buying with someone" name="option1" /> */}
            </span>
            {
              other === 1 &&
              <div>
                <Label text="Other income" />
                <span>
                  <InputField onChange={(val: string) => dispatch(otherIncomeChange(Number(val))) } 
                  onPeriodChange={(val: number) => dispatch(otherIncomePeriodChange(val))} 
                  />
                </span>
              </div>
            }
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
