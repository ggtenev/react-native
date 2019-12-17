import React from "react";
import { StyleSheet, Text, View,Platform } from "react-native";

 function Header() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Guess the Number</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    height: 80,
    backgroundColor:Platform.OS === 'android' ? "coral" : 'white',
    alignItems: "center",
    justifyContent: "center",
    width:'100%',
    borderBottomColor: Platform.OS === 'android' ? "transparent" : 'grey',
    borderBottomWidth: Platform.OS === 'android' ? 0 : 2,
  },
  title:{
    color:Platform.OS === 'ios'? 'coral' : 'white',
    fontWeight:'bold',
    fontSize:20
  }
});
export default Header