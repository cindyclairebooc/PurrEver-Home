import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Welcome from './screens/Welcome';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name = 'Welcome' component = {Welcome}/>
        <Stack.Screen name = 'LoginScreen' component = {LoginScreen}/>
        <Stack.Screen name = 'RegisterScreen' component = {RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white",
    alignItem: 'center',
    justifyContent: 'center',
  },
});
