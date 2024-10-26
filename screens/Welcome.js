import { StyleSheet, Text, TextInput, Button, View, Image, TouchableOpacity, Platform} from 'react-native';
import React from 'react';

export default function Welcome({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.purrever}>PurrEver Home</Text>
      <Text style={styles.purrevertag}>Where Every Cat Finds a Forever Home</Text>
      <Image 
        style={styles.logo}
        source={require('../assets/purrfecthomelogo.png')}
      />
      <Text style={styles.subtext}>Adopt a cat today!</Text>
      <View style={styles.buttonscontainer}>
      <TouchableOpacity 
            style={styles.loginbutton}
            onPress={() => navigation.navigate("LoginScreen")}
            >
            <Text style={styles.loginbuttontext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.registerbutton}
            onPress={() => navigation.navigate("RegisterScreen")}
            >
            <Text style={styles.registerbuttontext}>Register</Text>
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
    top: 80,
    left: '50%',
    transform: [{ translateX: -90 }],
    fontSize: 25,
    width: 400,
    fontFamily: 'Poppins_700Bold'
  },
  purrevertag: {
    position: 'absolute',
    top: 115,
    left: '50%',
    transform: [{ translateX: -150 }],
    fontSize: 16,
    width: 300,
    textAlign: 'center',
    color: '#F98D51'
  },
  logo: {
    width: 280,
    height: 280,
    alignSelf: 'center',
    position: 'absolute',
    top: 200
  },
  subtext: {
    textAlign: 'center',
    marginBottom: -210,
    fontSize: 30,
    fontFamily: 'Inter_800ExtraBold'
  },
  buttonscontainer: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
  },
  registerbutton: {
    backgroundColor: "#F98D51",
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginTop: 40,
    borderRadius: 15,
    elevation: 3,
  },
  registerbuttontext: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    width: 200,
    fontFamily: 'Inter_600SemiBold'
  },
  loginbutton: {
    backgroundColor: "#6588E6",
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    marginBottom: -20,
    borderRadius: 15,
    elevation: 3,
  },
  loginbuttontext: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    width: 200,
    fontFamily: 'Inter_600SemiBold'
  },
});
