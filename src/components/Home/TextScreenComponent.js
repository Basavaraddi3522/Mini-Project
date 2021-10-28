import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, FlatList, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { fontBold } from '../common/Constains';
import LoadingModel from '../common/Loading';

class TextScreenComponent extends Component {

  renderItem = ({item}) => {
    return(
        <View style={styles.messageView}>
            <Text style={styles.messageText}>
               {item.message}
            </Text>
        </View>
    )
  }

  render() {
    return (
      <>
        <StatusBar
            backgroundColor="#fff"
            barStyle="dark-content"
            animated={true}
          />
      <View style={styles.container}>
      <View style={styles.header}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('#12B2B2', true)}
            onPress={() => {
              this.props.goBack();
            }}>
            <View style={styles.backBtn}>
              <AntDesign name="arrowleft" color="#12B2B2" size={28} />
            </View>
          </TouchableNativeFeedback>

          <Text style={styles.headerTitle} numberOfLines={1}>
            Text Screen
          </Text>
        </View>
        <FlatList
            data={this.props.data}
            renderItem={this.renderItem}
            listkey ={(item, index) => item.key}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.inputBox}>
            <TextInput
              placeholder="Enter Your Message"
              placeholderTextColor="#ccc"
              style={styles.inputText}
              value={this.props.enteredText}
              onChangeText={(value)=>this.props.onChangeText(value)}
            />
            <TouchableOpacity onPress={this.props.uploadTextToFireStore} style={styles.borderCircle}>
              <FontAwesome
                name='send'
                size={25}
                color={'#12B2B2'}
              />
            </TouchableOpacity>
          </View>
      </View>
      <LoadingModel loading={this.props.loading}/>
      </>
    );
  }
}

export default TextScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },

  messageView: {
    marginVertical: 5, 
    marginTop: 10, 
    marginHorizontal: 8,
    padding: 8, 
    borderRadius: 24, 
    elevation: 3,
    backgroundColor: 'lightgray',
    alignSelf: 'flex-end'
  },

  messageText: {
    textAlign: 'left',    
    marginHorizontal: 5, 
    color: 'black', 
    marginVertical: 1, 
    fontWeight: '700'
  },

  messageTime: {
    fontSize: 12, 
    color: 'black', 
    opacity: 0.3, 
    textAlign: 'right', 
    marginRight: 8
  },

  inputText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fontBold,
    paddingHorizontal: 15,
    color: '#000',
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
    width: '85%',
    alignSelf: 'center',
    elevation: 8,
    marginBottom: '5%'
  },

  borderCircle: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: 'white',
    backgroundColor: 'white',
    alignSelf: 'center'
  }

})
