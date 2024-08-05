

// ReusableTextInput.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomInput = ({ placeholder, iconName, secureTextEntry, validate }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (text) => {
    setValue(text);
    if (validate) {
      const errorMsg = validate(text);
      setError(errorMsg);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={handleChange}
        placeholderTextColor="#888"
      />

      <View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#80BB1C',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 5, // Ensure the text starts 5 pixels from the left
  },
  error: {
    color: 'red',
    marginLeft: 10,
  },
});

export default CustomInput;
