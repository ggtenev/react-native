import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

export default function Round({ children }) {
  return (
    <View style={styles.roundContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  roundContainer: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
    borderWidth: 1,
    marginVertical:15,
  },
  text:{
      fontFamily:'open-sans',
      fontSize:24
  }
});
