import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGame from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/SourceSansPro-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/SourceSansPro-Bold.ttf")
  });
};

export default function App() {
  const [number, setNumber] = useState(undefined);
  const [start, setStart] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  const screenToDisplay = start ? (
    <GameScreen number={number} resetGame={() => setStart(false)} />
  ) : (
    <StartGame
      startGame={() => setStart(true)}
      chooseNumber={number => setNumber(number)}
    />
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={styles.container}>
              <Header />
              <View style={styles.start}>{screenToDisplay}</View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  start: {
    alignItems: "center"
  }
});
