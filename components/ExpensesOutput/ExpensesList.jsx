import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ expenses }) => {
  const renderItem = ({ item }) => {
    return <ExpenseItem {...item} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={expenses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
});
