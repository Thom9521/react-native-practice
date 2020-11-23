import React from 'react';

import {Text} from 'react-native';

class ClassComponent extends React.Component {
  render() {
    return <Text>This is a, {this.props.componentType}</Text>;
  }
}

export default ClassComponent;
