/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';


import {Alert} from 'react-native';

export class AuthenticationService {
  constructor({navigation}) {
    this.navigation = navigation;
  }
  //Email SignIn
  async EmailSignIn(email, password) {
    if (email.trim() === ' ' || password.trim() === ' ') {
      Alert.alert('Email or password is required!');
      return;
    }
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.navigation.navigate('Bottom Nav');
      })
      .catch(error => {
        Alert.alert(error.code);
      });
  }
  //EmailSignUP
  async EmailSignUp(email, password) {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert('Email or password is required!');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.navigation.navigate('Sign In');
      })
      .catch(error => {
        Alert.alert(error.code);
      });
  }
  async sendPasswordResetEmail(passwordResetEmail) {
    return await auth()
      .sendPasswordResetEmail(passwordResetEmail)
      .then(
        Alert.alert('A link has been sent to your email')
      )
      .catch(err=>{
        Alert.alert(err.code);
      });
  };
 
  async updatePassword(password, confirmPassword) {
    if (password.trim() !== confirmPassword.trim()) {
      Alert.alert('Passwords not match!');
      return;
    }
    return await auth().updatePassword(password);
  }
  //sign out all users
  SignOut() {
    auth()
      .signOut()
      .then(() => {
        Alert.alert('You have Succesfully signed out!');
        this.navigation.navigate('Sign In');

      });
  }
}
