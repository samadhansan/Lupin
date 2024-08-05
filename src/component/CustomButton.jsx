// CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, backgroundColor }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#80BB1C'

    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});

export default CustomButton;
