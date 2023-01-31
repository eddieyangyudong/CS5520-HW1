import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Start from "./screens/Start";
import Confirm from "./screens/Confirm";
import { LinearGradient } from "expo-linear-gradient";
import Finish from "./screens/Finish";

export default App = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goBackButton, setGoBackButton] = useState(false);
  const [confirmButton, setComfirmButton] = useState(null);
  const [startAgainButton, setStartAgainButton] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPhone, setCheckPhone] = useState(false);


  function saveInfo(email, phone) {
    setEmail(email);
    setPhone(phone);
    setGoBackButton(false);
    setComfirmButton(null);
    setStartAgainButton(false);
    setCheckEmail(false);
    setCheckPhone(false);
  }

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

  let bufferScreen = <Start saveInfo={saveInfo}
    checkEmailTrue={checkEmailTrue}
    checkPhoneTrue={checkPhoneTrue}
  />


  if (email !== "" && phone !== "" 
  && checkEmail && checkPhone) {
    bufferScreen = <Confirm email={email} 
    phone={phone}
    goBack={goBack} 
    confirmText={confirmText} 
    finishLater={finishLater}/>
  }

  if (goBackButton === true) {
    bufferScreen = <Start saveInfo={saveInfo} 
    checkEmailTrue={checkEmailTrue}
    checkPhoneTrue={checkPhoneTrue}
    storedEmail={email}
    storedPhone={phone}
    />
  }

  if (confirmButton === true) {
    bufferScreen = <Finish 
    confirmButton={confirmButton} 
    lastDigit={phone.charAt(phone.length-1)} 
    startAgain={startAgain}/>
  }

  if (confirmButton === false) {
    bufferScreen = <Finish 
    confirmButton={confirmButton} 
    lastDigit={phone.charAt(phone.length-1)} 
    startAgain={startAgain}/>
  }

  if (startAgainButton === true) {
    bufferScreen = <Start saveInfo={saveInfo} 
    checkEmailTrue={checkEmailTrue}
    checkPhoneTrue={checkPhoneTrue}
    storedEmail=""
    storedPhone=""
    />

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
