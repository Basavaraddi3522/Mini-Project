import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';

import {fontRegular, fontBold} from '../common/Constains';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ConsultCard extends Component {
  constructor(props) {
    super(props);
  }

  Status = this.props.status;

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.consultCard}>
          <View style={styles.cardImgBox}>
            <Image source={this.props.image} style={styles.cardImg} />

            <View
              style={{
                ...styles.iconPin,
                backgroundColor:
                  this.props.type == 'message'
                    ? '#10AFB4'
                    : this.props.type == 'voice-call'
                    ? '#FA416A'
                    : this.props.type == 'appointment'
                    ? '#2378FF'
                    : '#2CBE6D',
              }}>
              <Ionicons
                name={
                  this.props.type == 'message'
                    ? 'ios-mail'
                    : this.props.type == 'voice-call'
                    ? 'call'
                    : this.props.type == 'appointment'
                    ? 'calendar'
                    : 'chatbubble-ellipses'
                }
                size={18}
                color="#fff"
              />
            </View>
          </View>

          <View style={styles.cardContent}>
            <View style={styles.inRow}>
              <Text style={styles.statusLabel} numberOfLines={1}>
                {this.props.label}
              </Text>
              <Text
                style={{
                  ...styles.status,
                  color:
                    this.Status == 'Accepted'
                      ? '#3AA4A3'
                      : this.Status == 'Unconfirmed'
                      ? '#D2A99A'
                      : this.Status == 'Still in Progress'
                      ? '#2E6EC8'
                      : '#737373',
                }}
                numberOfLines={1}>
                {this.Status}
              </Text>

              {/* {this.props.doctorName != '' ? (
                <Text style={styles.textMedium} numberOfLines={1}>
                  {this.props.doctorName}
                </Text>
              ) : null} */}
            </View>

            <Text style={styles.userName} numberOfLines={1}>
              {this.props.userName}
            </Text>

            <View style={styles.inRow}>
              <Text style={styles.cardDescription} numberOfLines={1}>
                {this.props.description}
              </Text>
              {/* <Text style={styles.textMedium} numberOfLines={1}>
                {this.props.consultDate}
              </Text> */}
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  consultCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 15,
    elevation: 3,
    marginVertical: 8,
  },

  cardImgBox: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardImg: {
    width: 65,
    height: 65,
    borderRadius: 20,
  },

  iconPin: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#06D65D',
    position: 'absolute',
    bottom: 0,
    right: 5,
  },

  cardContent: {
    flex: 1,
    marginLeft: 4,
  },

  statusLabel: {
    flex: 1,
    fontSize: 12,
    fontFamily: fontRegular,
    color: '#B2B1B8',
  },

  status: {
    flex: 1,
    fontSize: 12,
    fontFamily: fontRegular,
    color: '#2E6EC8',
    marginLeft: 10,
  },

  userName: {
    fontSize: 14,
    fontFamily: fontBold,
    color: '#282828',
    marginVertical: 3,
  },

  cardDescription: {
    flex: 2,
    fontSize: 13,
    fontFamily: fontRegular,
    color: '#282828',
  },

  textMedium: {
    flex: 1,
    fontSize: 10,
    fontFamily: fontBold,
    color: '#282828',
    marginLeft: 8,
  },
});
