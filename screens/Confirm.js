import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const Confirm = ({ email, phone, goBack, confirmText, finishLater }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.textContainer}>
          <Text style={styles.text}>You have entered:</Text>
          <Text style={styles.text}>{email}</Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.text}>Please confirm they are corret.</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Go back"
            onPress={() => goBack()}
            color="red"
          />
          <Button
            title="Confirm"
            onPress={() => confirmText()}
          />
          <Button
            title="Finish Later"
            onPress={() => finishLater()}
          />
        </View>
      </Card>

    </View>
  )
}

export default Confirm

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    marginTop: 20,
  },

  text: {
    marginLeft: 0,
    color: "purple",
    fontSize: 17,
    height: 25,
    fontWeight: "500"
  },
  buttonContainer: {
    marginTop: 50,
    height: 200
  }
});