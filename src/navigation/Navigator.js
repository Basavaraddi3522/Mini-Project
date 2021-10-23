import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginContainer from '../container/Login/LoginContainer';
import ForgetPasswordContainer from '../container/Login/ForgetPasswordContainer';
import SingUpContainer from '../container/Login/SingUpContainer';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={this.props.initialScreen}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SingUpContainer" component={SingUpContainer} />
          <Stack.Screen name="LoginContainer" component={LoginContainer} />
          <Stack.Screen name="ForgetPasswordContainer" component={ForgetPasswordContainer} />
          <Stack.Screen name="HomeTabs" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
