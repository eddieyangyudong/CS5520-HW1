import { View, StyleSheet } from "react-native";
import React from "react";

export default function Card(props) {
  return <View style={styles.box}>
    {props.children}
  </View>;
}

const styles = StyleSheet.create({
  box: {
    marginTop: 50,
    alignSelf: "center",
    alignItems: "center",
    height: 370,
    width: 300,
    borderRadius: 10,
    backgroundColor: "white",
    shadowRadius: 10,
    shadowOpacity: 0.15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    elevation: 10
  },
});