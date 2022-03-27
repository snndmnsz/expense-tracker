import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button.jsx";
import { useDispatch } from "react-redux";
import {
  removeExpense,
  addExpense,
  editExpense,
} from "../redux/slice/expenseStore";

const ManageExpense = ({ route, navigation }) => {
  const id = route.params?.id;
  const isEditing = !!id;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditing ? "Edit Expense" : "Add Expense",
    });
  }),
    [navigation, isEditing];

  const deleteHandler = () => {
    console.log("Delete expense!");
    dispatch(removeExpense(id));
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    console.log("Confirm expense!");
    if (isEditing) {
    } else {
      const dummy_data = {
        id: Math.random().toString(),
        description: "yeni buuu",
        amount: 11.99,
        date: new Date(),
      };
      dispatch(addExpense(dummy_data));
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" style={styles.button} onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteButton}>
          <IconButton
            name="trash"
            bc="red"
            color="red"
            size={25}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary,
  },
  buttons: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    margin: 10,
  },
  deleteButton: {
    width: "70%",
    backgroundColor: GlobalStyles.colors.secondary,
    borderRadius: 8,
    marginTop: 25,
  },
});
