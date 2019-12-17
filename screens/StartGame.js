import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  Keyboard,
  
} from "react-native";

import Colors from "../constants/colors";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

export default function StartGame({ startGame, chooseNumber }) {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [number, setNumber] = useState(0);

  const numberHandler = val => {
    setValue(val.replace(/[^0-9]/g, ""));
  };
  const resetHandler = () => {
    setValue("");
    setConfirmed(false);
  };
  const confirmHandler = () => {
    Keyboard.dismiss();
    const selectedNumber = Number(value);
    if (isNaN(selectedNumber) || selectedNumber < 1 || selectedNumber > 99) {
      Alert.alert(
        "Invalid number",
        "You have entered an invalid value, try again !",
        [{ text: "OK", onPress: () => resetHandler() }]
      );
      return;
    } else {
      setConfirmed(true);
      setNumber(selectedNumber);
    }
  };

  const startMessage = confirmed ? (
    <View style={{ marginVertical: 20 }}>
      <BodyText style={{ fontSize: 19 }}>The number you chose is</BodyText>
      <NumberContainer>{number}</NumberContainer>
      <MainButton
        onPress={() => {
          startGame();
          chooseNumber(number);
        }}
      >
        START
      </MainButton>
    </View>
  ) : (
    undefined
  );

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TitleText style={{ fontSize: 21 }}>Choose a number</TitleText>
        <View style={styles.inputField}>
          <TextInput
            style={{ textAlign: "center", width: 30 }}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberHandler}
            value={value}
          />
        </View>
      </View>
      <View style={styles.startButtons}>
        <View style={styles.btn}>
          <Button title="Reset" onPress={resetHandler} color={Colors.red} />
        </View>
        <View style={styles.btn}>
          <Button title="Confirm" onPress={confirmHandler} color={Colors.blue} />
        </View>
      </View>
      {startMessage}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginVertical: 20,
    shadowColor: "black",
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 3
    },
    backgroundColor: "white",
    shadowOpacity: 0.5,
    elevation: 5,
    alignItems: "center",
    padding: 10
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },
  startButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    margin: 10
  },
  btn: {
    width: "40%",
    borderRadius: 20
  },
  inputField: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: 30
  }
});
