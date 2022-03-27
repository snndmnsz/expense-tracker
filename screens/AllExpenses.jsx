import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useSelector } from "react-redux";

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expenses}
        expensesPeriod="Total"
        fallback="No Expenses Found"
      />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
