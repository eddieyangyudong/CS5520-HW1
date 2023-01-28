import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  text: {
    textAlign: "center",
    color: "purple",
    fontSize: 20,
    fontWeight: "bold",
    width: 150,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "purple",
    borderWidth: 3
  },
});
