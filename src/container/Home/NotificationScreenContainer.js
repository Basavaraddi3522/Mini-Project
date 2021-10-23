import React, { Component } from 'react';
import NotificationScreenComponent from '../../components/Home/NotificationScreenComponent';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export default class NotificationScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBack = () => {
  };

  async componentDidMount() {
    this.createNotificationListeners();
  }

  onNotificationButton = () => {
      PushNotification.localNotification({
      message: 'Hello Basava',
      title: 'Nordstone'
    });
  }

  createNotificationListeners = () => {
    this.messageListener = messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
      PushNotification.localNotification({
        message: message.notification.body,
        title: message.notification.title
      });
    });
  };

  render() {
    return (
      <NotificationScreenComponent 
        goBack={this.goBack}
        onNotificationButton={this.onNotificationButton}
      />
    );
  }
}
