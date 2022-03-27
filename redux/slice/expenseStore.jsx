import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.unshift(action.payload);
    },
    removeExpense: (state, action) => {
      state.expenses.splice(action.payload, 1);
    },
    editExpense: (state, action) => {
      state.expenses[action.payload.index] = action.payload.expense;
    },
  },
});

export const { addExpense, removeExpense, editExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
