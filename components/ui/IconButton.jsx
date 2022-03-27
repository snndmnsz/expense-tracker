import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, size, color, onPress, bc, mr }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.button,
          { borderColor: bc ? bc : "#D6E6F2", marginRight: mr ? mr : 0 },
        ]}
      >
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 5,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});
