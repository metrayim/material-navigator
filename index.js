/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler'
import MusicAnimation from './src/MusicAnimation'
import Slid from './src/Components/Slid'

AppRegistry.registerComponent(appName, () => Slid);
