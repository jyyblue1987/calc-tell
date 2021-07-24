import { FC, useState } from "react";
import Button from "../components/Button/Button";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Label from "../components/Label/Label";
import InputField from "../components/InputField/InputField";
import Output from "../components/Output/Output";
import { useDispatch, useSelector } from "react-redux";
import { increment, 
          salaryChange, salary2Change, otherIncomeChange, salaryPeriodChange, salary2PeriodChange, 
          otherIncomePeriodChange , addOther, deleteOther, deleteAllOther,
          addLoan, loanChange, deleteLoan, deleteAllLoan, depositChange, addCredit, deleteCredit, deleteAllCredit, creditChange
          } from "../store/store";
import { RootState } from "../store/store";
import OtherField from "../components/InputField/OtherField";
import LoanField from "../components/InputField/LoanField";
import DepositField from "../components/InputField/DepositField";


export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const {other_list, loan_list, credit_list} = useSelector((state: RootState) => state.counter);


  const [mode, setMode] = useState(1);
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

            <Label text="Do you have another source of income?" />
            <span>
              <Button
                title="Yes"
                name="option1"
                onClick={() => {
                  dispatch(addOther());
                }}
              />
              <Button
                title="No"
                name="option1"
                onClick={() => {
                  dispatch(deleteAllOther())
                }}
              />
              {/* <Button title="I'm buying with someone" name="option1" /> */}
            </span>
            {
              other_list.map((row, index) => (
                <div key={index}>
                  <Label text={'Other income #' + (index + 1) }/>
                  <span>
                    <OtherField onChange={(value: string) => dispatch(otherIncomeChange({index, value: Number(value)})) } 
                    onPeriodChange={(value: number) => dispatch(otherIncomePeriodChange({index, value: Number(value)}))} 
                    onDelete={() => dispatch(deleteOther(index))} 
                    />
                  </span>
                </div>
              ))
            }
            {
              other_list.length > 0 &&
              <button style={{width: 200, marginTop: 5}} onClick={() => dispatch(addOther())}>Add Other Income</button>
            }

            <Label text="Do you have any loans?" />
            <span>
              <Button
                title=" Yes "
                name="option2"
                onClick={() => {
                  console.log("addLoan")
                  dispatch(addLoan());
                }}
              />
              <Button
                title=" No "
                name="option2"
                onClick={() => {
                  dispatch(deleteAllLoan())
                }}
              />
              {/* <Button title="I'm buying with someone" name="option1" /> */}
            </span>
            {
              loan_list.map((row, index) => (
                <div key={index}>
                  <Label text={'Loan #' + (index + 1) }/>
                  <span>
                    <LoanField onChange={(value: string) => dispatch(loanChange({index, value: Number(value)})) }                     
                    onDelete={() => dispatch(deleteLoan(index))} 
                    />
                  </span>
                </div>
              ))
            }
            {
              loan_list.length > 0 &&
              <button style={{width: 200, marginTop: 5}} onClick={() => dispatch(addLoan())}>Add Loan</button>
            }

            <Label text="Do you have any credit cards?" />
            <span>
              <Button
                title="  Yes  "
                name="option2"
                onClick={() => {                  
                  dispatch(addCredit());
                }}
              />
              <Button
                title="  No  "
                name="option2"
                onClick={() => {
                  dispatch(deleteAllCredit())
                }}
              />
              {/* <Button title="I'm buying with someone" name="option1" /> */}
            </span>
            {
              credit_list.map((row, index) => (
                <div key={index}>
                  <Label text={'Loan #' + (index + 1) }/>
                  <span>
                    <LoanField onChange={(value: string) => dispatch(creditChange({index, value: Number(value)})) }                     
                    onDelete={() => dispatch(deleteCredit(index))} 
                    />
                  </span>
                </div>
              ))
            }
            {
              credit_list.length > 0 &&
              <button style={{width: 200, marginTop: 5}} onClick={() => dispatch(addCredit())}>Add credit card</button>
            }

            <Label text="How much deposite do you have?" />
            <span>
              <DepositField onChange={(val: string) => dispatch(depositChange(Number(val))) } 
                     />
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
