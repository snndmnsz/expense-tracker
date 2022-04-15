import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: 1,
      description: "Gum",
      amount: 195,
      date: new Date("2022-03-01"),
    },
    {
      id: 2,
      description: "Rent",
      amount: 109500,
      date: new Date("2022-03-26"),
    },
    {
      id: 3,
      description: "Credit Card",
      amount: 4500,
      date: new Date("2022-03-25"),
    },
    {
      id: 4,
      description: "Books",
      amount: 65,
      date: new Date("2022-02-10"),
    },
    {
      id: 5,
      description: "Car Rental",
      amount: 250,
      date: new Date("2022-03-10"),
    },
    {
      id: 6,
      description: "Grocery",
      amount: 200,
      date: new Date("2022-03-27"),
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
