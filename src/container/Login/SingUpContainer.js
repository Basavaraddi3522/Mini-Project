import React, {Component} from 'react';
import SingUpComponent from '../../components/Login/SingUpComponent';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';

export default class SingUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      userEmail:'',
      password:'',
      confirmPassword: '',
      loading: false
    };
  }

  setShowPass = val => {
    this.setState({
      showPass: val,
    });
  };

  onChangeEmail=(val)=>{
    this.setState({userEmail:val})
  }

  onChangePassword=(val)=>{
    this.setState({password:val})
  }

  onChangeConfirmPassword=(val)=>{
    this.setState({confirmPassword:val})
  }

  singUpUser = async () => {
    const {userEmail, password,confirmPassword} = this.state
    let message = ""
      let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      var regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if(reg.test(userEmail)==false){
        Toast.show({
          type: "error",
          position: "bottom",
          text1: 'Please enter valid email'
        })
      }else if(regularExpression.test(password)==false){
        Toast.show({
          type: "error",
          position: "bottom",
          text1: 'Please enter strong password'
        })
      }
      else if(confirmPassword!=password){
        Toast.show({
          type: "error",
          position: "bottom",
          text1: 'Password did not match'
        })
      }else{
      auth()
      .createUserWithEmailAndPassword(userEmail, password)
      .then(() => {
        this.setState({loading: true})
        Toast.show({
          type: "success", 
          position: "bottom",
          text1: 'User account created & Please sign in!'
        })
        this.props.navigation.navigate('LoginContainer');
        this.setState({loading: false})
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: "error", 
            position: "bottom",
            text1: 'Provided email address is already in use!'
          })
        }
    
        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: "error", 
            position: "bottom",
            text1: 'That email address is invalid!'
          })
        }
      });
    }
  };

  render() {
    const {userEmail, password, confirmPassword, showPass} = this.state
    return (
      <SingUpComponent
        showPass={showPass}
        setShowPass={val => this.setShowPass(val)}
        singUpUser={this.singUpUser}
        onChangePassword={(val)=>this.onChangePassword(val)}
        onChangeEmail={(val)=>this.onChangeEmail(val)}
        onChangeConfirmPassword={(val)=>this.onChangeConfirmPassword(val)}
        userEmail={userEmail}
        password={password}
        confirmPassword={confirmPassword}
        loading={this.state.loading}
      />
    );
  }
}
