import React from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

import {View} from 'react-native';

const ParentComponent = () => {
  return (
    <View>
      <FunctionalComponent componentType="functional component" />
      <ClassComponent componentType="class component" />
    </View>
  );
};
export default ParentComponent;
