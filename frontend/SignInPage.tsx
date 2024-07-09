/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../CSS/Styles';

import {Button, Avatar} from 'react-native-paper';
import {customTheme} from '../CSS/colors';

import {AuthenticationService} from '../Services/AuthenticationService';
import {saveUserEmail} from '../Services/LocalStorage';






function SignInPage({navigation}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

 const authService = new AuthenticationService({navigation});

  const handleSaveUserEmail = async userEmail => {
    try{

      await saveUserEmail(userEmail);
    }
    catch(error){
      console.log('Could not save user email to local storage');
  }
  }


  useEffect(()=>{
handleSaveUserEmail(email);
  },[email])

  return (
    <SafeAreaView style={styles.container}>
       <View style={{flexDirection: 'row', marginLeft: 20,marginBottom: 10}}>
            <Avatar.Icon size={70} icon='car'/>
            <Text style={{fontSize: 40, marginTop: 10,  fontWeight: 'bold'}}>DriveSafe</Text>
            </View>
        <View>
        <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="@email"
      />
        </View>
      <View>
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      </View>
      <View>
      <Button
          mode="contained"
          theme={customTheme}
          onPress={() => {
            authService.EmailSignIn(email, password);
          }}
          >
          Sign In
        </Button>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Reset Password')}>
        <Text style = {{color: 'blue', marginTop: 20, marginBottom: 20, fontSize: 25}}> Forgot your password? </Text>
        </TouchableOpacity>
        <Text style = {{marginTop: 20, marginBottom: 20, fontSize: 25}}> Do you have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
        <Text style = {{color: 'blue', marginTop: 20, marginBottom: 20, fontSize: 25}}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default SignInPage;

