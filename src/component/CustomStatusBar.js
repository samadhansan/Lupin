// StatusBar.js
import React from 'react';
import { StatusBar, View, Platform } from 'react-native';

const CustomStatusBar = ({ backgroundColor, ...props }) => (
    <View style={{ backgroundColor, height: Platform.OS === 'ios' ? 20 : 0 }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
);

export default CustomStatusBar;
