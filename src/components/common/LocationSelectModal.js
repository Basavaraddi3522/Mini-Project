import React, {Component} from 'react';
import {
  FlatList,
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

import {WIDTH, HEIGHT, fontRegular, fontBold} from '../common/Constains';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

export default class LocationSelectModal extends Component {
  _renderLocationCard = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onLocationSelected;
        }}
        style={styles.locationCard}>
        <Text style={{...styles.textRegular}}>{item.location}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#ccc', true)}
            onPress={() => {
              this.props.onCloseModal(false);
            }}>
            <View style={styles.backBtn}>
              <Ionicons name="close" color="#282828" size={24} />
            </View>
          </TouchableNativeFeedback>

          <TextInput
            placeholder="Search any city or location"
            placeholderTextColor="#ccc"
            style={styles.searchText}
          />
        </View>

        <TouchableOpacity
          onPress={() => {}}
          style={{...styles.inRow, marginHorizontal: 12}}>
          <Text style={{...styles.textRegular, color: '#12B2B2', flex: 1}}>
            Use current location
          </Text>
          <Ionicons name="locate-sharp" color="#12B2B2" size={24} />
        </TouchableOpacity>

        <FlatList
          data={this.props.locationsData}
          renderItem={this._renderLocationCard}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },

  backBtn: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#DEDEDE',
  },

  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontFamily: fontBold,
    color: '#282828',
    marginLeft: 12,
  },

  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationCard: {
    paddingVertical: 12,
    marginHorizontal: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: '#ccc',
  },

  searchText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#000',
    paddingVertical: 6,
    marginLeft: 6,
  },

  textRegular: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#000',
  },
});
