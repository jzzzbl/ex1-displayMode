import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { TouchableOpacity, Alert, Dimensions, Image, Button, StyleSheet, Text, View } from 'react-native';

import AppButton from './components/AppButton'

export default function App() {

  const [count, setCount] = useState(0);
  const [isOdd, setisOdd] = useState(false);

  const countIncrementHandler = ()=>{
    setCount(count + 1)
  };

  useEffect(() => {
    count % 2 === 0 ? setisOdd(true) : setisOdd(false)
  },[count]);

  const onButtonPress = ()=>{
    Alert.alert("Theme has been saved!")
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Display Mode</Text>
        <Text style={styles.desc}>tap below to toggle between day and night mode</Text>
      </View>

      <View 
        style={
          isOdd
              ? styles.dayProfile
              : styles.nightProfile
        }>
        <Image 
          source={require("./assets/images/ralsei.png")}
          style={styles.pfp}
        />
        <Button 
          style={styles.username}
          color="#4E67EB"
          title={'jzzzbl'}
        />
        <Text style={
          isOdd
          ? styles.dayText
          : styles.nightText
        }>I'm a front-end developer from Toronto. I'm currently learning Node.js and React Native.</Text>
        <Text style={
          isOdd
          ? styles.dayText
          : styles.nightText
        }>Here is my favorite emoji: 🐰</Text>
        <Text style={styles.hashtags}>#madewithReactNative</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity 
          onPress={countIncrementHandler}
          style={styles.dayNightBtn} 
        >
           <Image 
          source={
            isOdd
              ? require("./assets/icons/moon.png")
              : require("./assets/icons/sun.png")
            }
          style={styles.modeBtn}
        />
        </TouchableOpacity>

      </View>
      <View style={styles.footer}>
      <AppButton 
        onButtonPress={onButtonPress}
      />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    width: Dimensions.get("window").width/1.4,
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  }, 
  title:{
    color: "#4E67EB",
    fontWeight: "bold",
    fontSize: 26,
    marginBottom: 4
  },
  desc:{
    color: "#2e2e2e",
    textTransform: "uppercase",
    fontSize: 14,
  },
  dayProfile:{
    flex: 3,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {width: 0,height: 5},
    padding: 22,
    width: Dimensions.get("window").width/1.4,
    marginTop: 65,
    marginBottom: 75,
    backgroundColor: "#ffffff",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width/1.4,
  },
  nightProfile:{
    flex: 3,
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: {width: 0,height: 5},
    padding: 22,
    width: Dimensions.get("window").width/1.4,
    marginTop: 65,
    marginBottom: 75,
    backgroundColor: "#2e2e2e",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width/1.4,
  },
  pfp:{
    borderRadius: 100,
    width: 110,
    height: 110,
    marginBottom: 10
  },
  username:{
    fontSize: 18
  },
  dayText:{
    margin: 10,
    fontSize: 17,
    color: "#2e2e2e"
  },
  nightText:{
    margin: 10,
    fontSize: 17,
    color: "#f8f7ff"
  },
  hashtags:{
    textDecorationLine: "underline",
    fontSize: 14,
    fontStyle: "italic",
    color: "#abc4ff"
  },

  options:{
    flex: .4,
    justifyContent: "flex-end"
  },
  dayNightBtn:{
    alignItems: "center",
    width: 80,
    height: 80,
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#291D89",
  },
  modeBtn:{
    borderRadius: 50,
    margin: 12,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  
  footer:{
    flex: 1,
    justifyContent: "flex-end"
  }
});
