// Importing the ReactJS library including the hooks
import React, {useState, useEffect} from 'react';
// Importing components from the react-native library
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

const HooksComponent = () => {
  // Declaring new state variables
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [countMultiplied, setCountMultiplied] = useState(0);

  // Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // Updating the count value multiplied with the multiplier
    setCountMultiplied(count * multiplier);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {count} * {multiplier} = {countMultiplied}
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(value) => setMultiplier(value)}
        value={multiplier}
        placeholder="Insert a multipler..."
      />
      <Button title="+1" onPress={() => setCount(count + 1)} />
    </View>
  );
};

/* StyleSheet component that holds all 
the styling which is referred in the JSX */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'blue',
    fontSize: 30,
  },
  input: {
    height: 50,
    borderColor: 'darkslateblue',
    borderWidth: 1,
    marginBottom: 5,
  },
});

export default HooksComponent;
