import React, { Component } from 'react';
import { View, Image, StatusBar, Text, StyleSheet } from 'react-native';
import {fontBold, fontRegular} from '././container/common/Constains';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <StatusBar
            backgroundColor="black"
            barStyle="dark-content"
            animated={true}
          />
        <View style={styles.container}>
            <Image 
              source={require('./assets/images/splash.gif')}
              style={styles.logoGif}
            />
            <Text style={styles.nordText}>Nordstone</Text>
            <Text style={[styles.nordText, styles.subText]}>Interview Mini-Project</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: 'black'
  },

  nordText: {
    color: 'white', 
    fontSize: 25, 
    alignSelf: 'center', 
    marginTop: 20, 
    fontWeight: 'bold', 
    fontFamily: fontBold
  },

  subText: {
    fontSize: 16,
    marginTop: 5
  },

  logoGif: {
    width: '100%', 
    alignSelf: 'center'
  }

})
