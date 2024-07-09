/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';

//const  { mongoose } = require('mongoose');
//import mongoose from 'mongoose';

import styles from '../CSS/Styles';

import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Button, Avatar} from 'react-native-paper';
import {customTheme, grey} from '../CSS/colors';

import {AuthenticationService} from '../Services/AuthenticationService';

import {postUser} from '../Services/server';

function SignUpPage({navigation}) {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

  const authService = new AuthenticationService({navigation});

  const data = {
    _id : 'string',
    username: 'string',
    email: 'string',
    profilePicture: 'string',
    createdAt: 'date',
    updatedAt: 'date',
    };


  return (
    <SafeAreaView style={styles.container}>
       <View style={{flexDirection: 'row', marginLeft: 20,marginBottom: 20}}>
            <Avatar.Icon size={70} icon="car"/>
            <Text style={{fontSize: 40, marginTop: 10,  fontWeight: 'bold'}}>DriveSafe</Text>
        </View>
      <Text>User Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={userName}
        placeholder="User Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="@email"
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <Text>Confirm Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <Button
        mode="contained"
        theme={customTheme}
        onPress={() => {
          if(password.trim() !== confirmPassword.trim()){
            Alert.alert("Passwords don't match");
            return;
          }
          data.userName = userName;
          data.email = email;
          data.profilePicture = <Icon name="person" size={30} color={grey}/>;
          data.createdAt = new Date();
          data.updatedAt = new Date();
          postUser(data);
          authService.EmailSignUp(email, password);
        }}
        >
        Sign up
      </Button>

    </SafeAreaView>
  );
}

export default SignUpPage;

