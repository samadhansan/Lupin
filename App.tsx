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


import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <Signin />
      {/* <ForgotPassword /> */}
      {/* <ResetPassword /> */}
      {/* <EnterOtp /> */}
    </SafeAreaProvider>

  );
}

export default App;
