import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, PermissionsAndroid, TouchableOpacity, StatusBar, Linking, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fontBold, WIDTH } from '../common/Constains';
import GridImageView from 'react-native-grid-image-viewer';
import RBSheet from "react-native-raw-bottom-sheet";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import LoadingModel from '../common/Loading';
import Toast from 'react-native-toast-message';


class PhotoScreenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      loading: false
    };
  }

  componentDidMount = () => {
    this.getAllImagesFromStorage()
  }

  onPressCamera = async () => {
    this.RBSheet.close()
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
         
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.pickImageCamera()
      } else{
        setTimeout(() => {
        Linking.openSettings();
      }, 3000)
      Toast.show({
        type: "error", 
        position: "bottom",
        text1: 'Camera Permission denied.!',
        text2: 'Please accept the permission for accessing Camera.!'
      })
    }
    } else {
    }
  };

  onPressMedia = async () => {
    this.RBSheet.close()
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
         
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.pickImageGallery()
      } else {
        setTimeout(() => {
          Linking.openSettings();
        }, 3000)
        Toast.show({
          type: "error", 
          position: "bottom",
          text1: 'Media Permission denied.!',
          text2: 'Please accept the permission for accessing images and files.!'
        })
      }
    } else {
    }
  };

  getAllImagesFromStorage = () => {
    this.setState({loading: true})
    var data = [];
    var storageRef = storage().ref("galaryImages");
    storageRef.listAll().then((result) =>{
      result.items.forEach((imageRef)=> {
        // And finally display them
        imageRef.getDownloadURL().then((url) =>{          
          this.setState({loading: false})
          data.push(url.toString())
          this.setState({images:data})
        }).catch(function(error) {
          // Handle any errors
          this.setState({loading: false})
        });
      });
    })
  }

  pickImageCamera = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
          skipBackup: true,
          path: 'images',
      },
  };
  launchCamera(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
          console.log("response", response);
          this.RBSheet.close()
          this.uploadImageToStorage(response.assets[0].uri, response.assets[0].fileName)
      }
  });
  }

  pickImageGallery = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
          { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
          skipBackup: true,
          path: 'images',
      },
  };
  launchImageLibrary(options, response => {
      if (response.didCancel) {

      } else if (response.error) {
         
      } else if (response.customButton) {
          
      } else {
          this.setState({loading: true})
          console.log("path", response);
          this.RBSheet.close()
          this.uploadImageToStorage(response.assets[0].uri, response.assets[0].fileName)
      }
  });
  }

  uploadImageToStorage(path, name) {
    this.setState({loading: true})
    let reference = storage().ref('galaryImages/'+name);
    let task = reference.putFile(path);
    task.then(() => {
      this.setState({loading: false})
      Toast.show({
        type: "success", 
        position: "bottom",
        text1: 'Image uploaded successfully.!'
      })
        console.log('Image uploaded to the bucket!');
        this.getAllImagesFromStorage()
    }).catch((e) => {
      this.setState({loading: false})
      Toast.show({
        type: "error", 
        position: "bottom",
        text1: 'Image uploading error.!'
      })
        console.log('uploading image error => ', e);
    });
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
              Photo Screen
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.headline_text}>Your Gallery</Text>
            <Text style={styles.explore_text}>Click on an image to view in full screen mode</Text>
            <GridImageView
            data={this.state.images} />
          </ScrollView>
          <TouchableOpacity style={styles.addIcon} onPress={() => this.RBSheet.open()}>
            <Ionicons name='add' size={30} color='#fff' />
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={WIDTH/2.5}
          openDuration={250}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            container: {
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8
            }
          }}
        >
          <Text style={styles.imgUploadText}>Upload Image Using,</Text>
          <TouchableOpacity onPress={this.onPressCamera}>
            <Text style={styles.imgUploadSubText}>1. Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressMedia}>
            <Text style={[styles.imgUploadSubText, {marginBottom: 10}]}>2. Open Gallery</Text>
          </TouchableOpacity>
        </RBSheet>
      </View>
      </View>
      <LoadingModel loading={this.state.loading}/>
      </>
    );
  }
}

export default PhotoScreenComponent;

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

  headline_text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    fontFamily: fontBold
  },

  explore_text: {
    marginTop: 5,
    marginBottom: 10,
    color: 'black',
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: fontBold
  },

  addIcon: {
    borderWidth: 1.5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    position: 'absolute',
    bottom: 18,
    right: 14,
    height: 60,
    backgroundColor: '#12B2B2',
    borderRadius: 100
  },

  imgUploadText: {
    color: '#12B2B2',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 15,
    marginHorizontal: 20,
    fontFamily: fontBold
  },

  imgUploadSubText: {
    color: '#12B2B2',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 15,
    marginLeft: 60,
    fontFamily: fontBold
  }

})