import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from "react-native";

import Colors from "../constants/colors";

export default function MainButton({ children, onPress }) {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style = {styles.btnContainer}>
      <ButtonComponent activeOpacity = {0.6} onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 12,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "open-sans",
    fontSize: 24
  },
  btnContainer:{
	  borderRadius: 7,
	  overflow:'hidden'
  }
});
