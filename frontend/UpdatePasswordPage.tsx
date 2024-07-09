import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView, Button, Alert} from 'react-native';
import styles from '../CSS/Styles';
import {AuthenticationService} from '../Services/AuthenticationService';

function UpdatePasswordPage({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const authService = new AuthenticationService({navigation});
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.authtext}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View>
        <Text style={styles.authtext}>Confirm Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
      </View>
      <View>
        <Button
          onPress={() => {
            if (
              password === '' ||
              password === null ||
              confirmPassword === '' ||
              confirmPassword === null
            ) {
              Alert.alert('Please Enter the password');
              return;
            } else if (password !== confirmPassword) {
              Alert.alert('Passwords do not match');
              return;
            }
            authService.updatePassword(password);
          }}
          title="Update password"
        />
      </View>
    </SafeAreaView>
  );
}

export default UpdatePasswordPage;
