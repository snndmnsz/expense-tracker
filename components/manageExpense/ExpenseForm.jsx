import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "./Input";
const ExpenseForm = ({ header, setData, data }) => {
  const inputChangedHandler = (inputIdentifier, inputValue) => {
    setData((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: inputValue,
      };
    });
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.headerText}>{header}</Text>
      <Input
        label="Amount"
        textInputObject={{
          value: data.amount,
          keyboardType: "decimal-pad",
          placeholder: "Amount",
          onChangeText: (inputValue) => {
            inputChangedHandler("amount", +inputValue);
          },
        }}
      />
      <Input
        label="Date"
        textInputObject={{
          value: data.date,
          placeholder: "YYYY-MM-DD",
          maxLenght: 10,
          onChangeText: (inputValue) => {
            inputChangedHandler("date", inputValue);
          },
        }}
      />
      <Input
        label="Description"
        textInputObject={{
          value: data.description,
          placeholder: "Description",
          multiline: true,
          onChangeText: (inputValue) => {
            inputChangedHandler("description", inputValue);
          },
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 35,
    width: "100%",
  },
  headerText: {
    fontSize: 21,
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
