import {AppRegistry} from 'react-native';
import { Main } from './src/Main.mjs';
import {name} from './app.json';

AppRegistry.registerComponent( name, () => Main );
