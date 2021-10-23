import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fontBold } from '../common/Constains';
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

  getAllImagesFromStorage = () => {
    this.setState({loading: true})
    var data = [];
    var storageRef = storage().ref("galaryImages");
    storageRef.listAll().then((result) =>{
      result.items.forEach((imageRef)=> {
        // And finally display them
        imageRef.getDownloadURL().then((url) =>{
          console.log(url);
          data.push(url.toString())
          this.setState({images:data})
          this.setState({loading: false})
          console.log(this.state.images);
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
          this.props.RBSheet.close()
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
          skipBackup: true, // do not backup to iCloud
          path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
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
    let reference = storage().ref('galaryImages/'+name);
    let task = reference.putFile(path);
    task.then(() => {
      Toast.show({
        type: "success", 
        position: "bottom",
        text1: 'Image uploaded to the successfully.!'
      })
        console.log('Image uploaded to the bucket!');
        this.getAllImagesFromStorage()
        this.setState({loading: false})
    }).catch((e) => {
      Toast.show({
        type: "error", 
        position: "bottom",
        text1: 'Image uploading image error.!'
      })
        console.log('uploading image error => ', e);
        this.setState({loading: false})
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
          height={140}
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
          <TouchableOpacity onPress={this.pickImageCamera}>
            <Text style={styles.imgUploadSubText}>1. Open Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.pickImageGallery}>
            <Text style={styles.imgUploadSubText}>2. Open Gallery</Text>
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
    marginLeft: 20,
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