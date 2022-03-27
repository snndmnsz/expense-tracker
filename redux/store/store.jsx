import { configureStore } from "@reduxjs/toolkit";
import expenseStore from "../slice/expenseStore";

export const store = configureStore({
  reducer: {
    expense: expenseStore,
  },
});


