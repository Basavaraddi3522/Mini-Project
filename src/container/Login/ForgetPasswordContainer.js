import React, {Component} from 'react';
import ForgetPasswordComponent from '../../components/Login/ForgetPasswordComponent';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';

export default class ForgetPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: ''
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  onChangeEmail=(val)=>{
    this.setState({userEmail:val})
  }

  onSendEmail = () => {
    const {userEmail} = this.state
    auth().sendPasswordResetEmail(userEmail)
    .then(() => {
      Toast.show({
        type: "success", 
        position: "bottom",
        text1: 'Successfully sent you link'
      })
      this.props.navigation.navigate('LoginContainer');
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        Toast.show({
          type: "error", 
          position: "bottom",
          text1: 'Entered email ID is wrong!'
        })
      }
      if (error.code === 'auth/user-not-found') {
        Toast.show({
          type: "error", 
          position: "bottom",
          text1: 'User not found!'
        })
      }
    })
  };

  render() {
    const {userEmail} = this.state
    return (
      <ForgetPasswordComponent
        goBack={this.goBack}
        onSendEmail={this.onSendEmail}
        onChangeEmail={(val)=>this.onChangeEmail(val)}
        userEmail={userEmail}
      />
    );
  }
}
