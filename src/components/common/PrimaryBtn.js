import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import {fontBold, fontMedium, fontSemiBold} from './Constains';

export default class PrimaryBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress();
        }}
        activeOpacity={0.6}
        disabled={!this.props.enabled}
        style={this.props.style}>
        <LinearGradient
          colors={[
            this.props.enabled ? '#52DEDF' : '#ccc',
            this.props.enabled ? '#12B2B2' : '#ccc',
          ]}
          style={styles.btn}>
          <View style={styles.elementsInRow}>
            <Text style={styles.btnText}>{this.props.title}</Text>
            {this.props.isIconRight ? (
              <Icon
                name="arrowright"
                size={24}
                color="#fff"
                style={styles.iconStyle}
              />
            ) : null}
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#12B2B2',
    padding: 12,
    borderRadius: 24,
    marginTop: 15,
    elevation: 8
  },

  btnText: {
    fontSize: 16,
    fontFamily: fontBold,
    color: '#fff',
    alignSelf: 'center',
  },

  elementsInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  iconStyle: {
    marginLeft: 8,
  },
});
