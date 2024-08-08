// Card.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const CardComponent = ({ title, imageUrl, buttonText, onPress }) => {
    return (
        <View style={styles.card}>
            {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
            <View style={styles.shadowBox}>

                {/* <View style={styles.image}> */}
                    <Image
                        source={require('../../assetes/addItem.png')}
                        style={{ width: 40, height: 40 }}
                    />
                {/* <Text style={styles.title}>{title}</Text> */}
                {/* </View> */}
                <Text style={styles.titlecss}>{title}</Text>
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
        minHeight: 120,
        // justifyContent: 'space-evenly',
        // padding: 0,

        // borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: { width: 4, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 3,
        // backgroundColor: 'cyan',
        // borderTopRightRadius: 20,
        // backgroundColor: 'cyan'
    },

    shadowBox: {
        // width: 200,
        // height: 100,
        flex: 1,
        minHeight: 120,
        backgroundColor: '#ffffff',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
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
        // paddingTop: 20,
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'red',
        padding: 0,

        // borderTopLeftRadius: 8,
        // borderTopRightRadius: 8,
    },
    titlecss: {
        // paddingTop: 32,
        // paddingBottom: 32,
        flex: 1,
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    // backgroundColor: 'green',
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CardComponent;
