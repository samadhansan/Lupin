// CustomText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ text, fontSize, color }) => {
    return (
        <Text style={[styles.text, { fontSize, color }]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16, // default font size
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000', // default color
    },
});

export default CustomText;
