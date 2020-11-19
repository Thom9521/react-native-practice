// Importing the ReactJS library
import React from 'react';
// Importing components from the react-native library
import {View, StyleSheet, ToastAndroid, Button} from 'react-native';

// A functional component
const ToastComponent = () => {
  /* Arrow function that displayes the toast by using the 
  show method form the ToasAndroid component */
  const showToast = () => {
    ToastAndroid.show('This is an Android Toast', ToastAndroid.SHORT);
  };

  // Returning the JSX
  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={() => showToast()} />
    </View>
  );
};

/* StyleSheet component that holds all 
the styling which is referred in the JSX */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

export default ToastComponent;
