import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/style";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const expentLast7days = expenses.filter((expense) => {
    const today = new Date();
    const expenseDate = new Date(expense.date);
    const diffTime = Math.abs(today - expenseDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  });

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expentLast7days}
        expensesPeriod="Last 7 Days"
        fallback="No Expenses Registered Last 7 Days"
      />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary,
  },
});
