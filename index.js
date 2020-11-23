/**
 * @format
 */

import {AppRegistry} from 'react-native';
import BasicComponents from './components/BasicComponents';
import ToastComponent from './components/ToastComponent';
import ParentComponent from './components/ParentComponent';
import {name as appName} from './app.json';

// Switch between the components you want to see on line 13.

AppRegistry.registerComponent(appName, () => ParentComponent);
