import * as React from 'react';
import { View } from 'react-native';
import Homescreen from './Screens/HomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Jokescreen from './Screens/Jokescreen';
import Horoscope from './Screens/Horoscope';
import Weather from './Screens/Weather';
import Topnews from './Screens/Topnews';

export default class App extends React.Component {
  
  
  render() {
    return (
      <View style={{backgroundColor:"orange", flex:1}}>
      <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Homescreen:Homescreen,
  Jokescreen:Jokescreen,
  Horoscope:Horoscope,
  Weather:Weather,
  Topnews:Topnews
});

const AppContainer = createAppContainer(AppNavigator);