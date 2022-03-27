import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/style";

const ExpensesOutput = ({ expenses, expensesPeriod, fallback }) => {
  let content = <Text style={styles.infoText}>{fallback}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      {content}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: GlobalStyles.colors.primary,
  },
  infoText: {
    fontSize: 18,
    color: GlobalStyles.colors.quaternary,
    marginTop: 50,
    opacity: 0.5,
    textAlign: "center",
  },
});
