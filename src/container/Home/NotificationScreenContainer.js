import React, { Component } from 'react';
import NotificationScreenComponent from '../../components/Home/NotificationScreenComponent';
import messaging from '@react-native-firebase/messaging';
import PushNotification, {Importance} from 'react-native-push-notification';


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
    PushNotification.createChannel(
      {
        channelId: 'Basu123', 
        channelName: 'Me Basu',
        channelDescription: 'A channel to categorise your notifications',
        playSound: true,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      (created) => console.log(`createChannel returned '${created}'`),
    );
  }

  onNotificationButton = () => {
      PushNotification.localNotification({
      channelId: 'Basu123',
      message: 'New update available 1.0.1',
      title: 'Nordstone Mobile App Development'
    });
  }

  createNotificationListeners = () => {
    this.messageListener = messaging().onMessage((message) => {
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
