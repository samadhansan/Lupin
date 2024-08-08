/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

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

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import CustomInput from './component/CustomInput';
import CustomButton from './component/CustomButton';
import CustomText from './component/CustomText';
import CustomInput from './component/CustomInput';
import BackgroundImage from './component/BackgroundImage';


function Signin({ navigation }) {
    const [inputValue, setInputValue] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email) ? '' : 'Invalid email address';
    };

    const validatePassword = (password) => {
        return password.length >= 6 ? '' : 'Password must be at least 6 characters';
    };


    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleButtonPress = () => {
        // Action to be performed on button press
        console.log('Button was pressed!');
        navigation.navigate('Dashboard')
    };
    const handleForgotPasswordPress = () => {
        // Action to be performed on button press
        console.log('Button was pressed!');
        navigation.navigate('ForgotPassword')
    };

    return (
        <>
            <BackgroundImage>
            <View style={styles.topView}>
                <View style={styles.imageContainer}>
                    <Image
                            source={require('../assetes/logo.webp')}
                        style={styles.image}
                    />
                    <Image
                            source={require('../assetes/Illustration.webp')}
                        style={styles.image}
                    />
                </View>
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontStyle: 'normal', marginBottom: 20, fontWeight: 'bold', color: 'black' }}>Enriching Lives, Empowering Livelihoods</Text>
                    <CustomText
                        text="Sign In"
                        fontSize={24}
                        color="black"
                    />
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingTop: 30 }}>
                        <CustomInput
                            value={inputValue}
                            onChangeText={handleInputChange}
                            placeholder="Enter your email"
                            iconName="envelope"
                            validate={validateEmail}
                        />
                        <CustomInput
                            value={inputValue}
                            onChangeText={handleInputChange}
                            placeholder="Enter your password"
                            iconName="lock"
                            secureTextEntry={true}
                            validate={validatePassword}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end', width: '80%' }}>
                        <TouchableOpacity onPress={handleForgotPasswordPress}>
                        <Text style={{ textAlign: 'right' }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomView}>
                <CustomButton
                    title="Sign In"
                    onPress={handleButtonPress}
                    backgroundColor="#80BB1C" // Example background color
                />
            </View>
            </BackgroundImage>
        </>
    );
}

const styles = StyleSheet.create({
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    bottomView: {
        width: '100%',
        padding: 20,
        height: 160, // Fixed height for the bottom view
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#1E90FF',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Signin;
