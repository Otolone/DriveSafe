/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View,TextInput, Text, SafeAreaView} from 'react-native';

import {Button} from 'react-native-paper';
import {customTheme} from '../CSS/colors';

import styles from '../CSS/Styles';
import {AuthenticationService} from '../Services/AuthenticationService';

function ResetPasswordPage({navigation}) {
  const [emailLink, setEmailLink] = useState('');

  const authService = new AuthenticationService({navigation});

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text style={{fontSize: 25, textAlign: 'center'}}>Please enter your email</Text>
        </View>
      <View >
        <TextInput
          style={styles.input}
          onChangeText={setEmailLink}
          value={emailLink}
        />
      </View>
      <View>
        <Button
        mode="contained"
        theme={customTheme}
        onPress={() => {
          authService.sendPasswordResetEmail(emailLink);
        }}
        >
        Send email reset link
      </Button>
      </View>
    </SafeAreaView>
  );
}

export default ResetPasswordPage;
