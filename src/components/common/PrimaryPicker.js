import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class PrimaryPicker extends Component {
  render() {
    return (
      <View style={{...styles.inputBox, ...this.props.style}}>
        <Picker
          selectedValue={this.props.selectedItem}
          onValueChange={value => {
            this.props.onChange(value);
          }}
          style={styles.pickerStyle}>
          {this.props.itemList
            ? this.props.itemList.map((item, index) => {
                return <Picker.Item label={item.label} value={item.value} />;
              })
            : null}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    marginTop: 6,
    paddingRight: 10,
    marginHorizontal: 20,
  },

  pickerStyle: {
    bottom: 3,
  },
});
