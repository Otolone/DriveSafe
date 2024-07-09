/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import styles from '../CSS/Styles';

function SplashPage ({navigation}) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Sign In');
        },5000);
        //clean up timer if the component unmounts before the timer
        //completes
        return () => clearTimeout(timer);
    },[navigation]);

    return(
        <SafeAreaView style={styles.splashpage}>
            <View style={{flex:4, flexDirection:'column', marginTop: 100}}>
            <Avatar.Icon size={70} icon='car'/>
            <Text style={{fontSize: 20, marginTop: 10,  fontWeight: 'bold'}}>DriveSafe</Text>
            </View>
            <View style={{flex:1}}>
                <Text>Powered by FET</Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashPage;