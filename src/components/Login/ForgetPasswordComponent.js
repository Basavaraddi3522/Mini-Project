import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontBold, fontRegular} from '../common/Constains';
import PrimaryBtn from '../common/PrimaryBtn';

export default class ForgetPasswordComponent extends Component {
  render() {
    const { onChangeEmail, userEmail } = this.props
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
            Forget Password
          </Text>
        </View>
          <Text style={styles.headerSubtitle}>
            Please enter your email below to receive password reset instructions
          </Text>

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

          <PrimaryBtn
            title="Send Email"
            onPress={() => {
              this.props.onSendEmail();
            }}
            style={{marginVertical: 15, width: '90%', alignSelf: 'center'}}
            enabled={!this.props.userEmail==''}
          />
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },

  backBtn: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#DEDEDE',
    marginTop: 35,
  },

  headerTitle: {
    fontSize: 24,
    fontFamily: fontBold,
    color: '#282828',
    marginTop: 45,
  },

  headerSubtitle: {
    fontSize: 18,
    fontFamily: fontRegular,
    color: '#282828',
    marginTop: 30,
    lineHeight: 22,
    textAlign: 'justify',
    marginHorizontal: 20
  },

  elementsInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  textInfo: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#282828',
    marginRight: 3,
  },

  textBtn: {
    fontSize: 14,
    fontFamily: fontRegular,
    color: '#49B3EC',
    marginLeft: 3,
  },

  inputLabel: {
    fontSize: 13,
    fontFamily: fontRegular,
    color: '#232323',
    marginTop: 40,
    marginLeft: 25
  },

  inputBox: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    marginTop: 8,
    paddingRight: 10,
    width: '90%',
    elevation: 8
  },

  inputText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontBold,
    paddingHorizontal: 15,
    color: '#000',
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
  }

});
