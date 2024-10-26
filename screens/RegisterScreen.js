import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function RegisterScreen({navigation}){
  return (
    <View style={styles.container}>
      <View style={styles.svgarrow}>
          <TouchableOpacity style={styles.arrowButton}>
            <Text style={styles.welcomeb} onPress={()=> navigation.navigate("Welcome")}>
              <Svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" 
                  fill="#FFFFFF"
                />
              </Svg>
            </Text>

            </TouchableOpacity>
      </View>

      <Image
          style={styles.catlogo}
          source={require('../assets/catpurrfecthomelogo.png')}
      />

      <View style={styles.Centerbox}>
            <Text style={styles.reglbl}>Register</Text>

            <View style={styles.usernamecont}>
            <View style={styles.svgusername}>
              <Svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1E1E1E">
                <Path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
              </Svg>
            </View>
            <TextInput style={styles.usernameLbl} placeholder='Username'/>
        </View>

        <View style={styles.emailcont}>
            <View style={styles.svgemail}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path 
                d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </Svg>
            </View>
            <TextInput style={styles.emailLbl} placeholder='Email'/>
        </View>

        <View style={styles.passcont}>
            <View style={styles.svgpassword}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path 
                    d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" 
                    stroke="black" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill= "#FFFFFF"
                />
                </Svg>
            </View>

            
            <TextInput style={styles.passLbl} placeholder='Password'/>

            <View style={styles.svgeye}>
              <Svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1E1E1E">
              <Path 
                d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
              </Svg>
            </View>
        </View>



        <TouchableOpacity style={styles.regbutton}>
          <Text style= {styles.regbtnlbl}>Register</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F98D51",
    justifyContent: 'center', 
  },
  catlogo: {
    width: 200,
    height: 200,
    marginTop: -150,
    marginBottom: -40,
    alignSelf: 'center'
  },
  Centerbox: {
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 30,
    padding: 20,
    elevation: 4,
    height: 390,
    marginBottom: -100
  },
  svgarrow: {
    position: 'absolute',
    top: 70,
    left: 30,
  },
  reglbl: {
    fontSize: 45,
    color: "black",
    marginTop: -5,
    fontFamily: 'Inter_800ExtraBold'
  },
  svgemail: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10, 
  },
  emailcont: {
    height: 45,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 5,
    elevation: 5,
    alignItems: 'center', 
  },
  emailLbl: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Inter_500Medium'
  },
  passcont: {
    height: 45,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 15,
    elevation: 5,
    alignItems: 'center', 
  },
  svgpassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  passLbl: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Inter_500Medium'
  },
  svgeye: {
    justifyContent: 'right',
    marginRight: 10,
    alignItems: 'center'
  },
  usernamecont: {
    height: 45,
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    borderColor: "black",
    borderWidth: 2,
    marginTop: 20,
    elevation: 5,
    alignItems: 'center', 
  },
  svgusername: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  usernameLbl: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Inter_500Medium'
  },
  regbutton:{
    backgroundColor:"#F98D51",
    height:45,
    marginTop: 30,
    marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    elevation: 3,
  },
  regbtnlbl: {
    fontSize:16,
    alignItem:'center',
    fontWeight:'600',
    color: 'white',
    fontFamily: 'Inter_600SemiBold'
  },
});
