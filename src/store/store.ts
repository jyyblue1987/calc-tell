import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrencyState {
  borrow: number;
  income: number;
  salary1: number,
  salary1_period: number,
  salary2: number,  
  salary2_period: number,
  other: number,
  other_period: number,
}

const initialState: CurrencyState = {
  borrow: 0,
  income: 0,
  salary1: 0,
  salary1_period: 1,
  salary2: 0,
  salary2_period: 1,
  other: 0,
  other_period: 1
};

const updateState = (state: CurrencyState) => {
  state.income = (state.salary1 * state.salary1_period + state.salary2 * state.salary2_period + state.other * state.other_period);
  state.borrow = state.income * 5;      
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
    otherIncomeChange: (state: CurrencyState, action: PayloadAction<number>) => {
      state.other = action.payload;
      updateState(state);
    },
    otherIncomePeriodChange: (state: CurrencyState, action: PayloadAction<number>) => {
      state.other_period = action.payload;
      updateState(state);
    },
  },
});

export const { increment, decrement, incrementByAmount, salaryChange, salaryPeriodChange, salary2Change, salary2PeriodChange, otherIncomeChange, otherIncomePeriodChange } = counterSlice.actions;

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
