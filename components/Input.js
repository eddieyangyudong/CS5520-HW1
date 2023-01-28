import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function Input({ textUpdateFunction }) {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={{ backgroundColor: "red" }}
        value={text}
        onChangeText={(changedText) => {
          textUpdateFunction(changedText);
          setText(changedText);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomColor: "rebeccapurple",
    borderBottomWidth: 2,
    width: "50%",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: { width: "30%", marginHorizontal: 5, color: "red" },
});
