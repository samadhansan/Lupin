import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/Signin';
import ForgotPassword from './src/ForgotPassword';
import ResetPassword from './src/ResetPassword';
import EnterOtp from './src/EnterOtp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Signin">
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="EnterOtp" component={EnterOtp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
