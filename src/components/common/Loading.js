import React, { Component } from "react";
import {  View,Text,StyleSheet,Image } from "react-native";
import Modal from 'react-native-modal';
import {TextLoader} from 'react-native-indicator';

import {WIDTH} from './Constains';

class LoadingModel extends Component {
    render() {
        return (
        <Modal isVisible={this.props.loading} backdropOpacity={0.6} >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Image
                        source={require('../../assets/images/load.gif')}
                        style={styles.appLogo}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </Modal>
        );
    }
}
export default LoadingModel;

const styles = StyleSheet.create({
  appLogo: {
    width: WIDTH / 2.8,
    height: WIDTH / 2.8,
    alignSelf: 'center'
  },

  modalContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  modalView:{
    width:WIDTH/2.8,
    height:WIDTH/2.8,
    backgroundColor: '#fff',
    borderRadius:20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    top:15
  }
});