import { StyleSheet, Text, TextInput, Button, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Welcome({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.purrever}>PurrEver Home</Text>
      <Image 
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
      <Text style={styles.subtext}>Adopt a cat today!</Text>
      <View style={styles.buttonscontainer}>
        <TouchableOpacity 
            style={styles.registerbutton}
            onPress={() => navigation.navigate("RegisterScreen")}
            >
            <Text style={styles.registerbuttontext}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            style={styles.loginbutton}
            onPress={() => navigation.navigate("LoginScreen")}
            >
            <Text style={styles.loginbuttontext}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center', 
  },
  purrever: {
    position: 'absolute',
    top: 100,
    left: '50%',
    transform: [{ translateX: -70 }],
    fontSize: 20,
    width: 140  
  },
  logo: {
    width: 320,
    height: 320,
    alignSelf: 'center',
    position: 'absolute',
    top: 140
  },
  subtext: {
    textAlign: 'center',
    marginBottom: -150,
    fontSize: 30
  },
  buttonscontainer: {
    position: 'absolute',
    bottom: 100, // Adjust the value to control how far down the buttons are
    width: '100%',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
  },
  registerbutton: {
    backgroundColor: "#C1DEEE",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 40,
    borderRadius: 15,
    elevation: 3,
  },
  registerbuttontext: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    width: 100
  },
  loginbutton: {
    backgroundColor: "#ACD29F",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    marginTop: 20,
    borderRadius: 15,
    elevation: 3,
  },
  loginbuttontext: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
});
