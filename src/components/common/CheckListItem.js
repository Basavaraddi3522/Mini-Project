import React, {Component} from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  WIDTH,
  HEIGHT,
  fontRegular,
  fontMedium,
  fontSemiBold,
} from '../common/Constains';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PrimaryPicker from '../common/PrimaryPicker';

import CheckBox from 'react-native-check-box';

export default class CheckListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.dataRow}>
        {this.props.isIcon ? (
          <View style={styles.iconPin}>
            <Ionicons
              name={
                this.props.icon == 'message'
                  ? 'ios-mail'
                  : this.props.icon == 'video-call'
                  ? 'videocam'
                  : 'close'
              }
              size={18}
              color="#fff"
            />
          </View>
        ) : null}

        <Text style={styles.inputText}>{this.props.textLeft}</Text>
        <CheckBox
          style={{marginRight: 5}}
          onClick={() => {
            this.props.onClick();
          }}
          isChecked={this.props.isChecked}
          checkedCheckBoxColor="#009B85"
          uncheckedCheckBoxColor="#ccc"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 15,
  },

  inputText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontMedium,
    paddingLeft: 10,
    color: '#000',
  },

  iconPin: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#25A7A5',
  },
});
