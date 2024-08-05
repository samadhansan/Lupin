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
import CustomButton from '../src/component/CustomButton';
import CustomText from '../src/component/CustomText';
import CustomInput from '../src/component/CustomInput';
import OTPTextInput from 'react-native-otp-textinput';



function EnterOtp() {
    const [inputValue, setInputValue] = useState('');
    const [otp, setOtp] = useState('');

    const handleOtpChange = (text) => {
        setOtp(text);
    };

    const handleSubmit = () => {
        // Handle the OTP submission (e.g., validate the OTP)
        console.log('Entered OTP:', otp);
    };


    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleButtonPress = () => {
        // Action to be performed on button press
        console.log('Button was pressed!');
    };


    return (
        <SafeAreaView style={{
            flex: 1,
            margin: 8
        }}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.topView}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/lupinLogo.png')}
                        style={styles.image}
                    />
                    <Image
                        source={require('../assets/Lupin_image.png')}
                        style={styles.image}
                    />
                </View>
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontStyle: 'normal', marginBottom: 20, fontWeight: 'bold', color: 'black' }}>Enriching Lives, Empowering Livelihoods</Text>
                    <CustomText
                        text="Please enter OTP sent you on your Email"
                        fontSize={24}
                        color="black"
                    />
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingTop: 30 }}>

                        <OTPTextInput
                            keyboardType='number-pad'
                            inputCount={4} // Number of OTP digits
                            handleTextChange={handleOtpChange}
                        />

                    </View>
                </View>

            </View>
            <View style={styles.bottomView}>
                <CustomButton
                    title="Verify OTP"
                    onPress={handleButtonPress}
                    backgroundColor="#80BB1C" // Example background color
                />
            </View>
        </SafeAreaView>
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
        padding: 20,
        height: 160, // Fixed height for the bottom view
        justifyContent: 'center',
        alignItems: 'center',
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

export default EnterOtp;