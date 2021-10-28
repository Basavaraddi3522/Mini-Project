import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import CalculatorScreenComponent from '../../components/Home/CalculatorScreenComponent';
import auth from '@react-native-firebase/auth';
import Parse from "parse/react-native.js";
import Slider from "react-native-slider";

export default class CalculatorScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOperation: 'none',
      firstNumber: 0,
      secondNumber: 0,
      result: '0',
      value: '0'
    };
  }  
  
  onClickalculation = async () => {
    const params = {key: this.state.selectedOperation, number1: this.state.firstNumber, number2: this.state.secondNumber}
    const helloFunction = await Parse.Cloud.run('calculator', params);
    this.setState({result: helloFunction})
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  logOut = () => {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    BackHandler.exitApp();
  }

  onChangeFirstNumber=(val)=>{
    this.setState({firstNumber:val})
  }

  onChangeSecondNumber=(val)=>{
    this.setState({secondNumber:val})
  }

  setlectOpertion = val => {
    this.setState({
      selectedOperation: val,
    });
  };

  operationList = [
    {id: '0', label: 'Select The Operation', value: 'none'},
    {id: '1', label: 'Addition', value: 'addition'},
    {id: '2', label: 'Substraction', value: 'substraction'},
    {id: '3', label: 'Multiplication', value: 'multiplication'},
  ];

  render() {
    return (
      <CalculatorScreenComponent 
        result={this.state.result}
        goBack={this.goBack}
        logOut={this.logOut}
        operationList={this.operationList}
        selectedOperation={this.state.selectedOperation}
        setlectOpertion={val => this.setlectOpertion(val)}
        firstNumber={this.state.firstNumber}
        secondNumber={this.state.secondNumber}
        onChangeFirstNumber={(val)=>this.onChangeFirstNumber(val)}
        onChangeSecondNumber={(val)=>this.onChangeSecondNumber(val)}
        onClickalculation={(val)=>this.onClickalculation(val)}
      />
    );
  }
}
