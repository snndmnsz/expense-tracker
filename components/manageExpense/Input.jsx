import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
const Input = ({ label, textInputObject }) => {
  return (
    <View style={styles.inputOutline}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        placeholderTextColor="#808080"
        style={styles.input}
        {...textInputObject}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputOutline: {
    marginHorizontal: 5,
    marginVertical: 10,
    color: GlobalStyles.colors.quaternary,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
  },
  label: {
    width: "100%",
    marginLeft: 70,
    fontSize: 16,
    color: GlobalStyles.colors.quaternary,
    marginBottom: 5,
  },
  input: {
    borderColor: GlobalStyles.colors.quinary,
    width: "80%",
    borderWidth: 2,
    fontSize: 18,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    color: GlobalStyles.colors.quaternary,
  },
});
