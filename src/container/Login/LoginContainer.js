import React, {Component} from 'react';
import {Keyboard,AsyncStorage} from 'react-native';
import LoginComponent from '../../components/Login/LoginComponent';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPass: false,
      isTerms: false,
      isKeyboardShown: false,
      username:'',
      password:'',
      loading: false
    };
  }

  componentDidMount() {
    Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  _keyboardDidShow = () => {
    this.setState({
      isKeyboardShown: true,
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      isKeyboardShown: false,
    });
  };

  setShowPass = val => {
    this.setState({
      showPass: val,
    });
  };

  setIsTerms = val => {
    this.setState({
      isTerms: val,
    });
  };

  onChangeUsername=(val)=>{
    this.setState({username:val})
  }

  onChangePassword=(val)=>{
    this.setState({password:val})
  }

  loginUser = async () => {
    this.setState({loading: true})
    const {username, password} = this.state
    auth().signInWithEmailAndPassword(username, password)
    .then(() => {
      this.setState({loading: true})
      this.props.navigation.navigate('HomeTabs');
      Toast.show({
        type: "success", 
        position: "bottom",
        text1: 'Successfully Logged In'
      })
    })
    .catch(error => {
      this.setState({loading: true})
      if (error.code === 'auth/invalid-email') {
        Toast.show({
          type: "error", 
          position: "bottom",
          text1: 'Entered Emial Is Wrong!'
        })
      }
      if (error.code === 'auth/wrong-password') {
        Toast.show({
          type: "error", 
          position: "bottom",
          text1: 'Entered Password Is Wrong!'
        })
      }
      if (error.code === 'auth/user-not-found') {
        Toast.show({
          type: "error", 
          position: "bottom",
          text1: 'User Not Found!'
        })
      }
      if (error.code === 'auth/user-not-found') {
        Toast.show({
          type: "error", 
          position: "bottom",
          text1: 'User Not Found!'
        })
      }
      this.setState({loading: false})
  });
  this.setState({loading: false})
}

  onForgetPassword = () => {
    this.props.navigation.navigate('ForgetPasswordContainer');
  };

  onSignUp = () => {
    this.props.navigation.navigate('SingUpContainer');
  };

  render() {
    const {showPass,isTerms,username,password,loading } = this.state
    return (
      <LoginComponent
        showPass={showPass}
        setShowPass={val => this.setShowPass(val)}
        isTerms={isTerms}
        setIsTerms={val => this.setIsTerms(val)}
        loginUser={this.loginUser}
        onSignUp={this.onSignUp}
        onForgetPassword={this.onForgetPassword}
        isKeyboardShown={this.state.isKeyboardShown}
        username={username}
        password={password}
        onChangePassword={(val)=>this.onChangePassword(val)}
        onChangeUsername={(val)=>this.onChangeUsername(val)}
        loading={loading}
      />
    );
  }
}
