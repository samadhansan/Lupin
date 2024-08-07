/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Signin from './src/Signin';
import ForgotPassword from './src/ForgotPassword';
import ResetPassword from './src/ResetPassword';
import EnterOtp from './src/EnterOtp';

import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './AppNavigator';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

// function App() {

//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Signin">
//           <Stack.Screen name="Signin" component={Signin} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator></AppNavigator>
    </SafeAreaProvider>
  );
};
export default App;
