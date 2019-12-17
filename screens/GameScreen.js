import React, { Component, useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import EndScreen from "./EndScreen";
import TitleText from "../components/TitleText";
import SecondaryButton from "../components/SecondaryButton";
import Round from "../components/Round";

export default function GameScreen({ number, resetGame }) {
  const initialGuess = Math.floor(Math.random() * 100);
  const [guess, setGuess] = useState(initialGuess);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [deviceHeight, setDeviceHeight] = useState(Dimensions.get('window').height)

  useEffect(() => {
    const updateLayout = () =>{
      setDeviceHeight(Dimensions.get('window').height)
    }
    Dimensions.addEventListener('change',updateLayout)

    return () => Dimensions.removeEventListener('change',updateLayout)
  })

  if (guess === number) {
    return <EndScreen guesses={previousGuesses.length} resetGame={resetGame} number ={number}/>;
  }

  const moreHandler = () => {
    
    if (guess > number) {
      setPreviousGuesses(current => [...current, guess]);
      setMax(guess - 1);
      setGuess(Math.floor(Math.random() * (guess - min)) + min);
    } else {
      Alert.alert("Do Not cheat", "You know what I'm sayin...", [
        { text: "I understand", style: "cancel" }
      ]);
      return;
    }
  };
  const lessHandler = () => {
    
    if (guess < number) {
      setPreviousGuesses(current => [...current, guess]);
      setMin(guess + 1);
      setGuess(Math.ceil(Math.random() * (max - guess)) + guess);
    } else {
      Alert.alert("Do Not cheat", "You know what I'm sayin...", [
        { text: "I understand", style: "cancel" }
      ]);
      return;
    }
  };
  const rounds = previousGuesses.map(g => (
    <Round key={Math.random()}>
      #{previousGuesses.indexOf(g) + 1} guess was {g}
    </Round>
  ));

  if(deviceHeight < 500 ){
    return (
      <View style = {{ height:'100%',width:'100%', alignItems:'center'}}>
      <View style={styles.container}>
        <TitleText style={{ marginVertical: 10, fontSize: 22 }}>
          Is this your number?
        </TitleText>
        <View style={styles.buttons}>
          <SecondaryButton onPress={moreHandler}>
            <Ionicons name="md-remove" size={20} />
          </SecondaryButton>
          <NumberContainer>{guess}</NumberContainer>
          <SecondaryButton onPress={lessHandler}>
            <Ionicons name="md-add" size={20} />
          </SecondaryButton>
        </View>
      </View>
      <View style={{ flex: 1,width:'80%' }}>
        <ScrollView >{rounds}</ScrollView>
      </View>
    </View>
    )
  }

  return (
    <View style = {{ height:'100%',width:'100%', alignItems:'center'}}>
      <View style={styles.container}>
        <TitleText style={{ marginVertical: 10, fontSize: 22 }}>
          Is this your number?
        </TitleText>
        <NumberContainer>{guess}</NumberContainer>
        <View style={styles.buttons}>
          <SecondaryButton onPress={moreHandler}>
            <Ionicons name="md-remove" size={20} />
          </SecondaryButton>
          <SecondaryButton onPress={lessHandler}>
            <Ionicons name="md-add" size={20} />
          </SecondaryButton>
        </View>
      </View>
      <View style={{ flex: 1,width:'80%' }}>
        <ScrollView >{rounds}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width > 350 ? '90%' : '85%',
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
  buttons: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between"
  }
});
