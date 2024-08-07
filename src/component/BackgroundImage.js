
import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const imageBackground = require('../../assetes/background.webp')

const BackgroundImage = ({ children }) => {
    return (
        // <SafeAreaView style={styles.safeArea}>
        <ImageBackground source={imageBackground} style={styles.backgroundImage}>
            {children}
        </ImageBackground>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BackgroundImage;
