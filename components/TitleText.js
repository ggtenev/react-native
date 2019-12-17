import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function TitleText(props) {
  return (
    <View style={{marginVertical:5}}>
      <Text style = {{...styles.container, ...props.style}}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "open-sans-bold"
  }
});