import React from "react";
import { Text, Dimensions, TouchableOpacity, StyleSheet, } from 'react-native';

export default function AppButton(props){

    return(
        <TouchableOpacity 
            style={styles.saveBtn}
            onPress={props.onButtonPress}
        >
        <Text style={styles.saveBtnText}>Save Theme</Text>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    saveBtn:{
      backgroundColor: "#291D89",
      width: Dimensions.get("window").width,
      alignItems: "center",
      padding: 25,
    },
    saveBtnText:{
      fontSize: 18,
      color:"white"
    }
  });
  