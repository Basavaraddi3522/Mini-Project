import React, { Component } from 'react';
import TextScreenComponent from '../../components/Home/TextScreenComponent';
import firestore from '@react-native-firebase/firestore'

export default class TextScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredText: '',
      getAllData: [],
      loading: false
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  };

  componentDidMount = () => {
    this.setState({loading: true})
    this.getAllTextFromFireStore()
  }
  
  getAllTextFromFireStore = async () => {
    let data = []
    const reference = firestore()
    .collection('users')
    const snapshots = await reference.get()
    snapshots.docs.map(doc => {
      data.push(doc._data)
      console.log(doc);
      this.setState({getAllData: data})
    });
    this.setState({loading: false})
  }
  
  
  uploadTextToFireStore = () => {
    this.setState({loading: true})
    if(this.state.enteredText.trim()){
      const reference = firestore()
    .collection('users')
    reference.add({'message': this.state.enteredText}).then((snapshot) => {
      console.log("snapshot", snapshot);
      this.getAllTextFromFireStore()
      this.setState({enteredText: ''})
      this.setState({loading: false})
    })
    }   
  }

  onChangeText=(val)=>{
    this.setState({enteredText:val})
  }


  render() {
    return (
      <TextScreenComponent 
        goBack={this.goBack}
        data={this.state.getAllData}
        enteredText={this.state.enteredText}
        onChangeText={(val)=>this.onChangeText(val)}
        uploadTextToFireStore={this.uploadTextToFireStore}
        loading={this.state.loading}
      />
    );
  }
}
