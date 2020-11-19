// Importing the ReactJS library and the useState component
import React, {useState} from 'react';
// Importing components from the react-native library
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

// A functional component
const BasicComponents = () => {
  // State values
  const [inputValue, setInputValue] = useState('Placeholder');
  const [textValue, setTextValue] = useState('Default value...');

  // Arrow function
  const changeText = (newText) => {
    setTextValue(newText);
  };

  // Returning the JSX
  return (
    <ScrollView style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Hello React Native</Text>
        <Image
          source={{uri: 'https://hackernoon.com/drafts/ro2832a9.png'}}
          style={styles.img}
        />
      </View>
      <View style={styles.view2}>
        {/* Textfield which value is set to be the 'textValue' state */}
        <Text>{textValue}</Text>
        {/* Typing in the inputfield will call the onChangeText attribute 
        which will change the state of 'inputValue' */}
        <TextInput
          style={styles.input}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        {/* Clicking the button will call the changeText function that will change 
        the state of 'textValue' */}
        <Button title="Button" onPress={() => changeText(inputValue)} />
      </View>
      <Text style={styles.bigText}>BIG TEXT IN SCROLLVIEW</Text>
    </ScrollView>
  );
};

/* StyleSheet component that holds all 
the styling which is referred in the JSX */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    padding: 10,
  },
  text: {
    color: 'blue',
    fontSize: 30,
  },
  img: {
    width: 400,
    height: 200,
  },
  input: {
    height: 50,
    borderColor: 'blue',
    borderWidth: 1,
    marginBottom: 5,
  },
  bigText: {
    fontSize: 100,
  },
});

export default BasicComponents;
