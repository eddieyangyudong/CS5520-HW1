import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Start from "./screens/Start";
import Confirm from "./screens/Confirm";
import { LinearGradient } from "expo-linear-gradient";
import Finish from "./screens/Finish";

export default App = () => {
  const [enteredText, setEnteredText] = useState("");
  const [goBackButton, setGoBackButton] = useState(false);
  const [confirmButton, setComfirmButton] = useState(null);
  const [startAgainButton, setStartAgainButton] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);

  function goBack() {
    setGoBackButton(true);
  }

  function checkEmailTrue() {
    setCheckEmail(true);
  }

  function checkPhoneTrue() {
    setCheckPhone(true);
  }

  function confirmText() {
    setComfirmButton(true);
  }

  function finishLater() {
    setComfirmButton(false);
  }

  function startAgain() {
    setStartAgainButton(true);
  }

  let bufferScreen = <Start saveInfo={(text) => {
    setEnteredText(text);
  }}
    checkEmailTrue={checkEmailTrue}
    checkPhoneTrue={checkPhoneTrue}
  />


  if (enteredText !== "" && checkEmail && checkPhone) {
    bufferScreen = <Confirm enteredInfo={enteredText} 
    goBack={goBack} 
    confirmText={confirmText} 
    finishLater={finishLater}/>
  }

  if (goBackButton === true) {
    bufferScreen = <Start saveInfo={(text) => {
      setEnteredText(text);
      setGoBackButton(false);
      setComfirmButton(null);
    }} 
    checkEmailTrue={checkEmailTrue}
    checkPhoneTrue={checkPhoneTrue}
    />
  }

  if (confirmButton === true) {
    bufferScreen = <Finish 
    confirmButton={confirmButton} 
    lastDigit={enteredText.charAt(enteredText.length-1)} 
    startAgain={startAgain}/>
  }

  if (confirmButton === false) {
    bufferScreen = <Finish 
    confirmButton={confirmButton} 
    lastDigit={enteredText.charAt(enteredText.length-1)} 
    startAgain={startAgain}/>
  }

  if (startAgainButton === true) {
    bufferScreen = <Start saveInfo={(text) => {
      setEnteredText(text);
      setGoBackButton(false);
      setComfirmButton(null);
      setStartAgainButton(false);
      setCheckEmail(false);
      setCheckPhone(false);
    }} 
    checkEmailTrue={checkEmailTrue}
    checkPhoneTrue={checkPhoneTrue}/>

  }
  return (
    <LinearGradient
      colors={["purple", "lightskyblue"]}
      style={styles.container}
      start={{ x: 1, y: 1.5 }}
      end={{ x: 0, y: 0 }}
    >
      <SafeAreaView style={styles.container}>
        {bufferScreen}
        <StatusBar style="auto" />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
