import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = ({ id, description, date, amount }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", {
      id: id,
      description: description,
      date: date,
      amount: amount,
    });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.item}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{date.toDateString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>$ {amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  item: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    borderWidth: 1,
    borderColor: "#D6E6F2",
  },
  textBase: {
    color: "white",
  },
  description: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: GlobalStyles.colors.tertiary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
});
