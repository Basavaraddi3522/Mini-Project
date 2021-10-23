import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fontBold } from '../common/Constains';

class NotificationScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <StatusBar
            backgroundColor="#fff"
            barStyle="dark-content"
            animated={true}
          />
      <View style={styles.container}>
      <View style={styles.header}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#12B2B2', true)}
            onPress={() => {
              this.props.goBack();
            }}>
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="#12B2B2" size={28} />
            </View>
          </TouchableNativeFeedback>

          <Text style={styles.headerTitle} numberOfLines={1}>
            Notification Screen
          </Text>
        </View>
        <View style={styles.iconView}>
          <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('red', true)} onPress={this.props.onNotificationButton}>
            <View style={styles.pushNotificationBtn}>
                <Ionicons name="md-notifications" color="white" size={85} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <Image 
            source={require('../../assets/images/bell.gif')}
            style={styles.gifIcon} 
        />
      </View>
      </>
    );
  }
}

export default NotificationScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    elevation: 8
  },

  backBtn: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 0.4,
    borderColor: '#12B2B2',
    marginVertical: 8,
    marginHorizontal: 5
  },

  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: fontBold,
    color: '#12B2B2',
    marginLeft: 12,
    fontWeight: '800'
  },

  pushNotificationBtn: {
    width: 160,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: 'red',
    alignSelf: 'center'
  },

  iconView: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  gifIcon: {
    width: '60%', 
    height: 60, 
    alignSelf: 'center', 
    marginBottom: 30
  }

})
