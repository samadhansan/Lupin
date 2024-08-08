

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
import CardComponent from './component/CardComponent';
import CustomStatusBar from './component/CustomStatusBar';


function Dashboard({ navigation }) {

    const handlePress = () => {
        // Action to be performed on button press
        console.log('Button was pressed!');
        navigation.navigate('ResetPassword')
    };
    const handleForgotPasswordPress = () => {
        // Action to be performed on button press
        console.log('Button was pressed!');
        navigation.navigate('ForgotPassword')
    };

    return (
        <>
            <CustomStatusBar backgroundColor="#57942F" barStyle="light-content" />
            <View style={{ height: 96, backgroundColor: "#80BB56", justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', paddingTop: 20 }}>
                <Image
                    source={require('../assetes/addItem.png')}
                    style={styles.navBarImage}
                />
                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 800, color: '#ffffff' }}>Dashboard</Text>
                <Image
                    source={require('../assetes/addItem.png')}
                    style={styles.navBarImage}
                />

            </View>
            <View style={styles.topView}>
                <View style={styles.imageContainer}>
                    <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center', fontSize: 22, fontStyle: 'normal', marginBottom: 0, fontWeight: 'bold', color: '#333333' }}>Lupin Human Welfare & Research Foundation</Text>
                    </View>
                    <Image
                        source={require('../assetes/Illustration.webp')}
                        style={styles.image}
                    />
                </View>
                <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontStyle: 'normal', marginBottom: 20, fontWeight: 'bold', color: '#333333' }}>Enriching Lives, Empowering Livelihoods</Text>
                </View>
            </View>
            {/* <View style={{ width: '90%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingTop: 30 }}> */}
            <View style={styles.container}>
                <View style={styles.row}>
                    <CardComponent
                        title="Add Plantation"
                        imageUrl="../assetes/addItem.png"
                        buttonText="Press Me"
                        onPress={handlePress}
                    />
                    <CardComponent
                        title="Add WRD"
                        imageUrl={require('../assetes/addItem.png')}
                        buttonText="Press Me"
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.row}>
                    <CardComponent
                        title="WRD Details"
                        titleWithImage="Plantation Details"
                        imageUrl={require('../assetes/addItem.png')}
                        buttonText="Press Me"
                        onPress={handlePress}
                    />
                    <CardComponent
                        title="WRD Details"
                        titleWithImage="WRD Details"
                        imageUrl="https://via.placeholder.com/150"
                        buttonText="Press Me"
                        onPress={handlePress}
                    />
                </View>
            </View>
            {/* </View> */}


        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 8,
        // backgroundColor: 'white',
        paddingBottom: 20,

    },
    row: {
        flexDirection: 'row',
    },
    topView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 350,
        backgroundColor: 'white',
        // backgroundColor: 'red',
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover'
    },

    navBarImage: {
        width: 40,
        height: 40,
        // backgroundColor: 'red',
        resizeMode: 'contain'
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

export default Dashboard;
