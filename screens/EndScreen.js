import React from "react";
import { View, Text, Button, StyleSheet, Image, Dimensions } from "react-native";

import Colors from "../constants/colors";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const EndScreen = ({ guesses, resetGame, number }) => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.message}>Game Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <BodyText style={styles.message}>
        The computer has guessed that your number was {number} in <Text
          style={{ color: Colors.primary, fontSize: 24, fontWeight: "800" }}
        >
            {guesses}
        </Text>{" "}
        tries
      </BodyText> 
      <Button title="New Game" onPress={() => resetGame()} />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    padding: 15,
    marginTop: Dimensions.get('window').height > 500 ? '5%' : 0
  },
  message: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    marginHorizontal: 7,
    textAlign: "center"
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    overflow: "hidden",
    borderRadius: Dimensions.get('window').width * 0.6 / 2,
    marginVertical: 5,
    borderWidth:3,
    borderColor:Colors.primary
  },
  img: {
    width: "100%",
    height: "100%"
  }
});

export default EndScreen;
