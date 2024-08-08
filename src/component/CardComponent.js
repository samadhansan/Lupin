// Card.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const CardComponent = ({ title, imageUrl, buttonText, onPress }) => {
    return (
        <View style={styles.card}>
            {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
            <View style={styles.shadowBox}>

                <View style={styles.image}>
                    <Image
                        source={require('../../assetes/addItem.png')}
                        style={{ width: 40, height: 40 }}
                    />
                </View>
                <Text style={styles.title}>{title}</Text>
                {/* <Button style={{ backgroundColor: "white" }} title={buttonText} onPress={onPress} /> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
        // backgroundColor: "white",
        backgroundColor: '#f8f8f8',

        // borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: { width: 4, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 3,
        // backgroundColor: 'cyan',
        // borderTopRightRadius: 20,
    },

    shadowBox: {
        // width: 200,
        // height: 100,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        // iOS shadow properties
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 }, // Right and bottom shadow
        shadowOpacity: 0.3,
        shadowRadius: 5,
        // borderTopRightRadius: 4,
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 16,
        borderRadius: 8,
        // Android elevation
        elevation: 8,
    },
    image: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    title: {
        paddingTop: 32,
        paddingBottom: 32,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
});

export default CardComponent;
