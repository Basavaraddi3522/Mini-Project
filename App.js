import React, { Component } from 'react';
import StartComponent from './src/StartComponent';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('yg6XvSEAejoGQ31lB4PKeHjuxNEKz17aEi36ZVRg','ocRQwLxPxTtD0FCa6yAVBFafUkHY525IFtxRsSQI');
Parse.serverURL = 'https://parseapi.back4app.com/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    this.checkPermission();
  }

  async checkPermission() {
    const enabled = await messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        fcmToken = await messaging().getToken();
        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);
        }
    }
  }

  async requestPermission() {
    try {
        await messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }

  render() {
    return (
      <>
      <StartComponent />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </>
    );
  }
}

export default App;
