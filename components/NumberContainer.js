import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    width:'40%',
    alignSelf:'center',
    marginBottom:7
  },
  number: {
    fontSize: 26
  }
});


