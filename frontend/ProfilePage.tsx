/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { customTheme } from '../CSS/colors';
import { updateUserById, findUserById } from '../Services/server';
import styles from '../CSS/Styles';
import * as Camera from '../Services/Camera';
import { updateUserProfilePicture } from '../Services/server';
import { getUserId } from '../Services/LocalStorage';

function ProfilePage({ navigation }) {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [user_Id, setUser_id] = useState('');

  
  const fetchUserId = async () => {
    const userId = await getUserId();
    console.log('User_id: ', userId)
    if(userId) {
      setUser_id(userId)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        if(user_Id){
          const result = await findUserById(user_Id);
          const name = result.name ? result.name : 'DriveSafe';
          setPhoto(result.profilePicture);
          setName(name);
          setEmail(result.email);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUserId();
    getData();
  }, [user_Id]);

  const handleImagePicker = async () => {
    try {
      await Camera.openImagePicker(setPhoto);
    } catch (error) {
      console.error('Error updating profile picture:', error);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      const updatedUser = await updateUserById(user_Id, {
        username: name,
        email: email,
        profilePicture: photo,
        updatedAt: new Date().toISOString(),
      });
      if (updatedUser) {Alert.alert('Your data has been updated');}
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        {photo ? (
          <TouchableOpacity
            style={{ alignContent: 'center', alignItems: 'center', padding: 30 }}
            onPress={() => {
              handleImagePicker;
              updateUserProfilePicture(user_Id,
                {
                profilePicture: photo,
              });
            }}
          >
            <Image
              source={{ uri: photo }}
              style={styles.capturedPhoto}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ alignContent: 'center', alignItems: 'center', padding: 30 }}
            onPress={handleImagePicker }
          >
            <Avatar.Icon size={60} icon="camera-account" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="email"
        />
      </View>
      <View>
        <Button
          mode="contained"
          theme={customTheme}
          onPress={handleUpdateProfile}
        >
          Update Profile
        </Button>
      </View>
    </SafeAreaView>
  );
}

export default ProfilePage;
