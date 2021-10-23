import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fontBold } from '../common/Constains';
import PrimaryPicker from '../common/PrimaryPicker';
import PrimaryBtn from '../common/PrimaryBtn';

class CalculatorScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { onChangeFirstNumber, onChangeSecondNumber, firstNumber, secondNumber, selectedOperation } = this.props
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
              <AntDesign name="arrowleft" color='#12B2B2' size={28} />
            </View>
          </TouchableNativeFeedback>

          <Text style={styles.headerTitle} numberOfLines={1}>
            Calculator Screen
          </Text>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#12B2B2', true)}
            onPress={() => {
              this.props.logOut();
            }}>
            <View style={styles.backBtn}>
              <AntDesign name="logout" color='#12B2B2' size={24} />
            </View>
          </TouchableNativeFeedback>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.resultView}>
            <Text style={styles.resText}>{this.props.result}</Text>
          </View>
          <View style={styles.inputBox}>
                <TextInput
                  placeholder="Enter First Number"
                  placeholderTextColor="#ccc"
                  maxLength={2}
                  keyboardType='number-pad'
                  style={styles.inputText}
                  value={firstNumber} 
                  onChangeText={(value)=>onChangeFirstNumber(value)}
                />
          </View>
          <View style={styles.inputBox}>
                <TextInput
                  placeholder="Enter Second Number"
                  maxLength={2}
                  placeholderTextColor="#ccc"
                  keyboardType='number-pad'
                  style={styles.inputText}
                  value={secondNumber} 
                  onChangeText={(value)=>onChangeSecondNumber(value)}
                />
          </View>
          <PrimaryPicker
              selectedItem={this.props.selectedOperation}
              itemList={this.props.operationList}
              onChange={value => this.props.setlectOpertion(value)}
              style={styles.operation}
            />
          <PrimaryBtn
            title="Calculate"
            onPress={() => {
              this.props.onClickalculation();
            }}
            style={{marginVertical: 15, width: '90%', alignSelf: 'center'}}
            enabled={!firstNumber == '' && !secondNumber == '' && selectedOperation !== 'none'}
          />
        </ScrollView>
      </View>
      </>
    );
  }
}

export default CalculatorScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

  inputText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontBold,
    paddingHorizontal: 15,
    color: '#000',
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    paddingRight: 10,
    width: '90%',
    alignSelf: 'center',
    elevation: 8,
    marginTop: 18
  },

  borderCircle: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: 'white',
    backgroundColor: 'white',
    alignSelf: 'center'
  },

  operation: {
    width: '90%', 
    borderRadius: 24, 
    elevation: 8, 
    alignSelf: 'center', 
    marginTop: 18,  
    borderColor: '#e8e8e8', 
    backgroundColor: '#fff'
  },

  resultView: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 0.4,
    borderColor: 'white',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginVertical: 25,
    elevation: 35
  },

  resText: {
    fontSize: 60,
    fontFamily: fontBold,
    color: '#12B2B2',
    fontWeight: 'bold',
    alignContent: 'center'
  }

})