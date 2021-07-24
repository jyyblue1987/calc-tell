import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurrencyState {
  borrow: number;
  income: number;
}

const initialState: CurrencyState = {
  borrow: 0,
  income: 0
};

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
      state.borrow = action.payload * 5;
      state.income = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, salaryChange } = counterSlice.actions;

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
