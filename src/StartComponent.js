import React, { Component } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Splash from './SplashScreen';
import Navigator from './navigation/Navigator';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'splash'
    };
  }

  onAuthStateChanged = (user) => {
    console.log("User", user);
    if (user) {
      setTimeout(() => {
        this.setState({currentScreen: 'HomeTabs'})
      }, 3000) 
    }
    else {
      setTimeout(() => {
        this.setState({currentScreen: 'LoginContainer'})
      }, 3000)  
    }
  }

  componentDidMount = () => {
    auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  render() {
    return this.state.currentScreen == 'splash' ? < Splash /> : <Navigator initialScreen={this.state.currentScreen} />
  }
}

export default Main;
