/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'react-native-axios'

axios.defaults.baseURL = 'http://13.232.212.12:3000'

AppRegistry.registerComponent(appName, () => App);
