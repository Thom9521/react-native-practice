/**
 * @format
 */

import {AppRegistry} from 'react-native';
import BasicComponents from './components/BasicComponents';
import ToastComponent from './components/ToastComponent';
import ParentComponent from './components/ParentComponent';
import {name as appName} from './app.json';

// Switch ToastComponent to BasicComponents on line 12 to test the BasicComponents component

AppRegistry.registerComponent(appName, () => ParentComponent);
