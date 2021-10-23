import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import {fontBlack, fontBold, fontRegular, WIDTH} from '../common/Constains';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PrimaryBtn from '../common/PrimaryBtn';
import LoadingModel from '../common/Loading';

export default class SingUpComponent extends Component {
  render() {
    const { onChangeEmail, onChangePassword, onChangeConfirmPassword, userEmail, password, confirmPassword } = this.props
    return (
      <>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
          animated={true}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
            <Image
              source={require('../../assets/images/reg.gif')}
              style={styles.appLogo}
              resizeMode="contain"
            />
          <Text style={styles.headerTitle}>Welcome to Nordstone</Text>

          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor="#ccc"
              style={styles.inputText}
              value={userEmail} 
              onChangeText={(value)=>onChangeEmail(value)}
            />
          </View>

          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter Your Password"
              placeholderTextColor="#ccc"
              style={styles.inputText}
              value={password}
              secureTextEntry={true}
              onChangeText={(value)=>onChangePassword(value)}
            />
          </View>

          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter Confirm Password"
              placeholderTextColor="#ccc"
              style={styles.inputText}
              value={confirmPassword} 
              onChangeText={(value)=>onChangeConfirmPassword(value)}
              secureTextEntry={this.props.showPass ? false : true}
            />

            <TouchableOpacity
              onPress={() => {
                this.props.setShowPass(!this.props.showPass);
              }}
              style={{...styles.borderCircle, borderWidth: 0}}>
              <Ionicons
                name={this.props.showPass ? 'eye-off-outline' : 'eye-outline'}
                size={22}
                color={this.props.showPass ? '#41D3A2' : '#9394A8'}
              />
            </TouchableOpacity>
          </View>

          <PrimaryBtn
            title="Sign Up"
            onPress={() => {
            }}
            style={{marginVertical: 20, width: '90%', alignSelf: 'center'}}
            enabled={!userEmail == '' && !password == '' && !confirmPassword == ''}
          />
        </ScrollView>
        <LoadingModel loading={this.props.loading}/>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  headerTitle: {
    width: WIDTH * 0.7,
    fontSize: 24,
    fontFamily: fontBlack,
    color: '#282828',
    marginTop: 5,
    marginLeft: 25
  },

  inputLabel: {
    fontSize: 13,
    fontFamily: fontRegular,
    color: '#232323',
    marginTop: 20,
    marginLeft: 25
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    marginTop: 6,
    paddingRight: 10,
    elevation: 8,
    width: '90%',
    alignSelf: 'center'
  },

  borderCircle: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#41D3A2',
  },

  inputText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontBold,
    paddingHorizontal: 15,
    color: '#000',
  },

  infoText: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#282828',
    textAlign: 'center',
  },

  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  textBtn: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#5A8DE9',
    marginHorizontal: 3,
  },

  appLogo: {
    width: WIDTH / 2.8,
    height: WIDTH / 2.8,
    alignSelf: 'center',
    marginVertical: 10
  }

});
