import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import {WIDTH, fontRegular, fontBold} from '../common/Constains';

import Ionicons from 'react-native-vector-icons/Ionicons';
import PrimaryBtn from '../common/PrimaryBtn';
import LoadingModel from '../common/Loading';


export default class LoginComponent extends Component {
  render() {
    const { loading,username,password,showPass,isTerms,isKeyboardShown } = this.props
    const { onChangeUsername,onChangePassword,setShowPass,setIsTerms,loginUser,onForgetPassword,onSignUp } = this.props
    return (
      <>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
          animated={true}
        />

        <ScrollView style={styles.container}>
          <View style={styles.formContainer}>
            <Image
              source={require('../../assets/images/user.jpg')}
              style={styles.appLogo}
              resizeMode="contain"
            />

            <Text style={styles.tagLine}>Welcome back, User!</Text>

            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Enter Email"
                placeholderTextColor="#ccc"
                style={styles.inputText}
                value={username} 
                onChangeText={(value)=>onChangeUsername(value)}
              />
            </View>

            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.inputBox}>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor="#ccc"
                style={styles.inputText}
                secureTextEntry={showPass ? false : true}
                value={password} 
                onChangeText={(value)=>onChangePassword(value)}
              />

              <TouchableOpacity
                onPress={() => {
                  setShowPass(!showPass);
                }}
                style={{...styles.borderCircle, borderWidth: 0}}>
                <Ionicons
                  name={showPass ? 'eye-off-outline' : 'eye-outline'}
                  size={22}
                  color={showPass ? '#41D3A2' : '#9394A8'}
                />
              </TouchableOpacity>
            </View>

            <PrimaryBtn
              title="Login"
              onPress={() => {
                loginUser();
              }}
              enabled={!username == '' && !password == ''}
              style={{marginTop: 8}}
            />

            <TouchableOpacity
              onPress={() => {
                onForgetPassword();
              }}>
              <Text style={styles.forgotPassBtn}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {!isKeyboardShown ? (
          <View style={styles.bottomView}>
          <View style={styles.elementsInRow}>
            <Text style={styles.textInfo}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                onSignUp();
              }}>
              <Text style={styles.textBtn}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          </View>
        ) : null}
        <LoadingModel loading={loading}/>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  formContainer: {
    marginHorizontal: 18,
    marginTop: 65
  },

  appLogo: {
    width: WIDTH / 3.5,
    height: WIDTH / 3.5,
    alignSelf: 'center',
    marginVertical: 5
  },

  tagLine: {
    fontSize: 16,
    fontFamily: fontBold,
    color: '#232323',
    alignSelf: 'center',
    marginBottom: 25,
  },

  inputLabel: {
    fontSize: 13,
    fontFamily: fontRegular,
    color: '#232323',
    marginTop: 15,
    marginLeft: 10
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    marginTop: 8,
    paddingRight: 10,
    elevation: 8
  },

  borderCircle: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#41D3A2',
  },

  inputText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontBold,
    paddingHorizontal: 15,
    color: '#000',
  },

  forgotPassBtn: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#B7B8C4',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: 25,
  },

  elementsInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15
  },

  textInfo: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#B7B8C4',
    marginRight: 3,
  },

  textBtn: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#5A8DE9',
    marginLeft: 3,
  },

  termsCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },

  termsCheckText: {
    fontSize: 12,
    fontFamily: fontRegular,
    color: '#737373',
  },

  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  bottomView: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15
  }

});

