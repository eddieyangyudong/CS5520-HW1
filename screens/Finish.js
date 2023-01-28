import { View, Text, StyleSheet, Button, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Card from '../components/Card'

function confirmOrNot(confirmButton, lastDigit) {
  const brackets = "(based on the last digit of your phone number).";
  if (confirmButton === true) {
    return (
      <View>
        <SafeAreaView style={styles.textContainer}>
          <Text style={styles.textConfirm}>Thank you for signing up.Here's a pircture for you {brackets}</Text>
        </SafeAreaView>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/id/" + lastDigit + "/100/100" }} />
      </View>
    );
  }
  else {
    return (
      <View>
        <Text style={styles.textFinish}>Sorry to see you go.</Text>
        <Image
          style={styles.image}
          source={require("../assets/Sad-emoji.jpeg")} />
      </View>
    );
  }
}


export default function Finish({ confirmButton, lastDigit, startAgain }) {

  const view = confirmOrNot(confirmButton, lastDigit);
  return (
    <View style={styles.container}>
      <Card>
        {view}
      </Card>
      <Button
        title="Start Again"
        onPress={() => startAgain()}
        style={styles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 30,
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 170,
    alignSelf: "center"
  },
  textContainer: {
    margin: 5,
    flex: 0.5,
    flexGrow: 0.75

  },
  textConfirm: {
    color: "purple",
    fontSize: 17,
    height: 25,
    fontWeight: "500",
    width: 250,
    flex: 1,
    flexWrap: 'wrap',
  },
  textFinish: {
    marginTop: 20,
    marginBottom: 10,
    color: "purple",
    fontSize: 17,
    height: 25,
    fontWeight: "500",
    alignSelf: "center"
  }
});