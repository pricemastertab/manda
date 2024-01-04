import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import RegisterScreen from './screens/Register';
import ProfileScreen from '../AppRotinas/screens/Profile.js'
import LoginScreen from './screens/Login.js';
import FeedScreen from '../AppRotinas/screens/Feed.js'
import CreateRoutineScreen from './screens/Criar_rotina.js';


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'Login'
      screenOptions = {{
        headerShow: false,
        gestureEnable: false,
        headerTintColor: 'black' 
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name='Home' component={FeedScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Create' component={CreateRoutineScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
