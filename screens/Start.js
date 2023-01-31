import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import Header from '../components/Header'
import { useState } from "react";
import Card from '../components/Card';


export default function Start({ saveInfo, checkEmailTrue, checkPhoneTrue, storedEmail, storedPhone}) {
  const name = "Sign up";
  const [email, setEmail] = useState(storedEmail);
  const [phone, setPhone] = useState(storedPhone);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPhone, setCheckValidPhone] = useState(false);
  const [signUpEmail, setSignUpEmail] = useState(null);
  const [signUpPhone, setSignUpPhone] = useState(null);

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    }
    else {
      setCheckValidEmail(true);
    }
  }

  const handleCheckPhone = (text) => {
    setPhone(text);
    if (isNaN(text) || text.length !== 10) {
      setCheckValidPhone(true);
    }
    else {
      setCheckValidPhone(false);
    }
  }

  const resetText = (text) => {
    setEmail(text);
    setPhone(text);
  }


  return (
    <View style={styles.container}>
      <Header name={name} />
      <Card>
        <View style={styles.input}>
          <Text style={styles.text}>Email address</Text>
          <TextInput
            value={email}
            onChangeText={
              (text) => {
                handleCheckEmail(text);
              }}
            style={styles.textInput} />
          <View>
            {signUpEmail ? (<Text>Please enter a valid email</Text>)
              : (
                <Text></Text>
              )}
          </View>

          <Text style={styles.text}>Phone number</Text>
          <TextInput
            value={phone}
            onChangeText={
              (text) => {
                handleCheckPhone(text);
              }}
            style={styles.textInput} />
          <View>
            {signUpPhone ? (<Text>Please enter a valid phone number</Text>)
              : (<Text />
              )}
            <Text></Text>
          </View>
        </View>


        <View style={styles.buttonContainer}>
          <Button
            title="Reset"
            onPress={() => resetText("")}
            style={styles.resetButton}
            color="red"
          />

          <Button
            title="Sign up"
            onPress={() => {
              saveInfo(email, phone);
              checkValidEmail || email === "" ? setSignUpEmail(true) : checkEmailTrue();
              checkValidPhone || phone === "" ? setSignUpPhone(true) : checkPhoneTrue();
            }}
            style={styles.signUpButton}
          />
        </View>

      </Card>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
  },
  text: {
    marginTop: 30,
    color: "purple",
    fontSize: 20,
    marginLeft: 1,
  },
  textInput: {
    marginTop: 30,
    width: 230,
    borderBottomColor: "purple",
    borderBottomWidth: 2,
    margin: 12,
    color: "purple",
    fontSize: 18,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30
  },
  resetButton: {
    marginRight: 10,
    width: "30%",
  },
  signUpButton: {
    margin: 10,
    width: "30%",
    color: "red",
  },
  input: {
    marginLeft: 10,
  }


});