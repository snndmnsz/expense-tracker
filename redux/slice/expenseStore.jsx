import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: 1,
      description: "Gum",
      amount: 195,
      date: new Date("2019-01-01"),
    },
  ],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const { description, amount, date } = action.payload;
      const expenseId = (Math.random() * 1000000000).toFixed(0).toString();
      const expense = {
        id: expenseId,
        description: description,
        amount: amount,
        date: new Date(date),
      };
      state.expenses.unshift(expense);
    },
    removeExpense: (state, action) => {
      const filteredExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      state.expenses = filteredExpenses;
    },
    editExpense: (state, action) => {
      const { id, description, amount, date } = action.payload;
      const expense = state.expenses.find((expense) => expense.id === id);
      expense.description = description;
      expense.amount = +amount;
      expense.date = new Date(date);
    },
  },
});

export const { addExpense, removeExpense, editExpense } = expenseSlice.actions;

export default expenseSlice.reducer;
