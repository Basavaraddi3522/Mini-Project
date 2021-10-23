import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NotificationScreenContainer from '../container/Home/NotificationScreenContainer';
import PhotoScreenContainer from '../container/Home/PhotoScreenContainer';
import TextScreenContainer from '../container/Home/TextScreenContainer';
import CalculatorScreenContainer from '../container/Home/CalculatorScreenContainer';

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBar={props => <TabBarComponent {...props} />}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="NotificationScreenContainer" component={NotificationScreenContainer} />

        <Tab.Screen name="PhotoScreenContainer" component={PhotoScreenContainer} />

        <Tab.Screen
          name="TextScreenContainer"
          component={TextScreenContainer}
        />

        <Tab.Screen name="CalculatorScreenContainer" component={CalculatorScreenContainer} />
      </Tab.Navigator>
    );
  }
}

const TabBarComponent = ({state, descriptors, navigation}) => {
  let currentRouteName = state.routes[state.index].name;

  return (
    <View style={tabStyles.container}>
      <TouchableOpacity
        style={tabStyles.tabContainer}
        onPress={() => navigation.navigate('NotificationScreenContainer')}>
        <Ionicons
          name="md-notifications"
          size={26}
          color={currentRouteName == 'NotificationScreenContainer' ? '#12B2B2' : '#9394A9'}
        />
        <Text style={currentRouteName == 'NotificationScreenContainer' ? tabStyles.tabTextActive : tabStyles.tabTextNonActive}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabStyles.tabContainer}
        onPress={() => navigation.navigate('PhotoScreenContainer')}>
        <Ionicons
          name="images"
          size={26}
          color={
            currentRouteName == 'PhotoScreenContainer' ? '#12B2B2' : '#9394A9'
          }
        />
        <Text style={currentRouteName == 'PhotoScreenContainer' ? tabStyles.tabTextActive : tabStyles.tabTextNonActive}>Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabStyles.tabContainer}
        onPress={() => navigation.navigate('TextScreenContainer')}>
        <Ionicons
          name="ios-chatbox-ellipses"
          size={26}
          color={
            currentRouteName == 'TextScreenContainer' ? '#12B2B2' : '#9394A9'
          }
        />
         <Text style={currentRouteName == 'TextScreenContainer' ? tabStyles.tabTextActive : tabStyles.tabTextNonActive}>Text</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tabStyles.tabContainer}
        onPress={() => navigation.navigate('CalculatorScreenContainer')}>
        <MaterialCommunityIcons
          name="calculator-variant"
          size={26}
          color={currentRouteName == 'CalculatorScreenContainer' ? '#12B2B2' : '#9394A9'}
        />
        <Text style={currentRouteName == 'CalculatorScreenContainer' ? tabStyles.tabTextActive : tabStyles.tabTextNonActive}>Calculator</Text>
      </TouchableOpacity>
    </View>
  );
};

const tabStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 20,
  },

  tabContainer: {
    flex: 1, 
    alignItems: 'center'
  },

  tabTextActive: {
    fontSize: 12, 
    color: '#12B2B2',
    fontWeight: '800',
    marginVertical: 2
  },

  tabTextNonActive: {
    fontSize: 12, 
    color: '#9394A9',
    fontWeight: '600',
    marginVertical: 2
  }

});
