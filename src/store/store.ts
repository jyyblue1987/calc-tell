import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PeriodValue {
  value: number,
  period: number,
}

interface Param1 {
  index: number,
  value: number
}

export interface CurrencyState {
  borrow: number;
  income: number;
  loan: 0;
  salary1: number,
  salary1_period: number,
  salary2: number,  
  salary2_period: number,
  other_list: PeriodValue[],  
  loan_list: number[],
}


const initialState: CurrencyState = {
  borrow: 0,
  income: 0,
  loan: 0,
  salary1: 0,
  salary1_period: 1,
  salary2: 0,
  salary2_period: 1,
  other_list: [],
  loan_list: [],
};

const updateState = (state: CurrencyState) => {
  state.income = (state.salary1 * state.salary1_period + state.salary2 * state.salary2_period);
  for(var i = 0; i < state.other_list.length; i++)
    state.income += state.other_list[i].value * state.other_list[i].period;

  state.loan = 0
  for(var i = 0; i < state.loan_list.length; i++)
    state.loan += state.loan_list[i];

  state.borrow = state.income * 5 - state.loan;      
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CurrencyState) => {
      state.borrow += 1;
    },
    decrement: (state: CurrencyState) => {
      state.borrow -= 1;
    },
    incrementByAmount: (state: CurrencyState, action: PayloadAction<number>) => {
      state.borrow += action.payload;
    },
    salaryChange: (state: CurrencyState, action: PayloadAction<number>) => {
      state.salary1 = action.payload;
      updateState(state);
    },

    salaryPeriodChange: (state: CurrencyState, action: PayloadAction<number>) => {
      state.salary1_period = action.payload;
      updateState(state);
    },

    salary2Change: (state: CurrencyState, action: PayloadAction<number>) => {
      state.salary2 = action.payload;
      updateState(state);
    },
    salary2PeriodChange: (state: CurrencyState, action: PayloadAction<number>) => {
      state.salary2_period = action.payload;
      updateState(state);
    },
    addOther: (state: CurrencyState) => {
      state.other_list.push({
        value: 0,
        period: 1
      });
      updateState(state);
    },
    deleteOther: (state: CurrencyState, action: PayloadAction<number>) => {
      state.other_list = [... state.other_list].filter((item, index) => index != action.payload)
      updateState(state);
    },
    deleteAllOther: (state: CurrencyState) => {
      state.other_list = []
      updateState(state);
    },
    otherIncomeChange: (state: CurrencyState, action: PayloadAction<Param1>) => {      
      state.other_list = [... state.other_list].map((item:PeriodValue, index: number) => {
        return action.payload.index == index ? {value: action.payload.value, period: item.period} : item; 
      });
  
      updateState(state);
    },
    otherIncomePeriodChange: (state: CurrencyState, action: PayloadAction<Param1>) => {
      state.other_list = [... state.other_list].map((item:PeriodValue, index: number) => {
        return action.payload.index == index ? {value: item.value, period: action.payload.value} : item; 
      });  

      updateState(state);
    },
    addLoan: (state: CurrencyState) => {
      state.loan_list.push(0);
      updateState(state);
    },
    deleteLoan: (state: CurrencyState, action: PayloadAction<number>) => {
      state.loan_list = [... state.loan_list].filter((item, index) => index != action.payload)
      updateState(state);
    },
    deleteAllLoan: (state: CurrencyState) => {
      state.loan_list = []
      updateState(state);
    },
    loanChange: (state: CurrencyState, action: PayloadAction<Param1>) => {      
      state.loan_list = [... state.loan_list].map((item: number, index: number) => {
        return action.payload.index == index ? action.payload.value : item;
      });
      
      updateState(state);
    },
  },
});

export const { 
  increment, decrement, incrementByAmount, 
  salaryChange, salaryPeriodChange, salary2Change, salary2PeriodChange, 
  otherIncomeChange, otherIncomePeriodChange, addOther, deleteOther, deleteAllOther,
  loanChange, addLoan, deleteLoan, deleteAllLoan
} = counterSlice.actions;

export default counterSlice.reducer;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
