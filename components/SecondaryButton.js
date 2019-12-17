import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import Colors from '../constants/colors'

export default function SecondaryButton({children, onPress}) {
  return (
	<TouchableOpacity onPress = {onPress}>
	  <View style = {styles.button}>
		<Text style = {styles.text}>{children}</Text>
	  </View>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	button:{
        width:50,
        height:50,
	   backgroundColor:'#59bdf0',
	   padding:10,
	   marginVertical:5,
	   borderRadius:25,
	   alignItems:'center',
	   justifyContent:'center'
	},
    text:{
		fontFamily:'open-sans',
		fontSize:24
	}
})