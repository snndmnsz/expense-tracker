import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useLayoutEffect } from "react";
import { GlobalStyles } from "../constants/style";
import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import ExpenseForm from "../components/manageExpense/ExpenseForm";
import {
  removeExpense,
  addExpense,
  editExpense,
  getExpenseById,
} from "../redux/slice/expenseStore";

const ManageExpense = ({ route, navigation }) => {
  const id = route.params?.id;
  const isEditing = !!id;
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);
  const selectedExpense = expenses?.find((expense) => expense?.id === id);

  const [data, setData] = React.useState({
    id: selectedExpense ? selectedExpense.id : "",
    description: selectedExpense ? selectedExpense.description : "",
    amount: selectedExpense ? selectedExpense.amount.toString() : 0,
    date: selectedExpense
      ? selectedExpense.date.toISOString().slice(0, 10)
      : "",
  });

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
      dispatch(editExpense(data));
    } else {
      dispatch(addExpense(data));
    }
    navigation.goBack();
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
    >
      <ExpenseForm
        setData={setData}
        data={data}
        style={styles.form}
        defaultValues={selectedExpense}
        header={
          isEditing ? `Editing ${route.params.description}` : "Add New Expense"
        }
      />
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
    </KeyboardAwareScrollView>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary,
  },
  form: {
    width: "100%",
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
    width: "80%",
    backgroundColor: GlobalStyles.colors.secondary,
    borderRadius: 8,
    marginTop: 25,
  },
});
