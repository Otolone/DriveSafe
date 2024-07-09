/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {Button, Avatar} from 'react-native-paper';
import {customTheme} from '../CSS/colors';
import * as Camera from '../Services/Camera';
import {postPost} from '../Services/server';

import {getUserId} from '../Services/LocalStorage';


export default function PostUpdatePage({navigation}) {
  const [photo, setPhoto] = useState('');
  const [details, setDetails] = useState('');
  const [UserId, setUserId] = useState('');

  const getUser_ID = async () => {
    const Id = await getUserId();
    if(Id) {
      setUserId(Id);
    } 
  };

  useEffect(() => {
    getUser_ID();
  },[]);

   return (
    <View>
      <View style={{alignContent: 'center', alignItems: 'center', paddingTop: 30}}>
        {photo ? (
            <Image
              source={{uri: photo}}
              style={styles.profileImage}
              resizeMode="contain"
            />

        ) : (

            <Avatar.Icon size={60} icon="car"  />
          )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 50,
        }}>
        <View
          style={{
            left: 0,
            top: -19,
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.uploadPictureButton}
        onPress={() => {
          Camera.handleCameraLaunch(setPhoto);
        }}>
        <Text style={styles.uploadPictureText}>Take Picture</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadPictureButton}
        onPress={() => {
          Camera.openImagePicker(setPhoto);
        }}>
        <Text style={styles.uploadPictureText}>Upload Picture</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={details}
        onChangeText={setDetails}
        placeholder="Brief Details"
      />
      <View>
        <Button
          mode="contained"
          theme={customTheme}
          onPress={() => {
            postPost({
              userId:UserId, //'668284e0a84a1d5f51a9a34b'
              content: details,
              media: photo,
              createdAt: Date(),
              updatedAt: Date(),
              likes: [],
              commentID : [],
            });
            Alert.alert('Succesfully posted');
            navigation.navigate('Home');
          }}>
          Post
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backButtonText: {
    fontSize: 24,
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  postUpdatesButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40,
    marginHorizontal: 15,
  },
  postUpdatesText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  takePictureButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row', // Ensures image and text are in a row
  },
  takePictureText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 10, // Adds spacing between image and text
  },
  uploadPictureButton: {
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadPictureText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#d3d3d3',
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    height: 100,
  },
  postButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 15,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
  },
  postButtonText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
