import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {getPost, findUserByEmail} from '../Services/server';
import styles from '../CSS/Styles';
import {getUserEmail, saveUserId} from '../Services/LocalStorage';

function HomePage({navigation, route}) {
  const [data, setData] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  //const [userId, setUserId] = useState('');

  // Get user email from local storage
  const handleGetUserEmail = async () => {
    try {
      const uEmail = await getUserEmail();
      
      if (uEmail) {
        setUserEmail(uEmail);
      }
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  // Use the email from local storage to get the user ID
  const handleFindUserByEmail = async email => {
    try {
      console.log('In home: ', email);
      const user = await findUserByEmail(email);
      
      if (user._id) {
        //setUserId(user._id); // Set the userId state
        saveUserId(user._id); // Save userId to local storage
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await getPost();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const initialize = async () => {
      await handleGetUserEmail();
      if (userEmail) {
        await handleFindUserByEmail(userEmail);
      }
      await getData();
    };

    initialize();
  }, [userEmail]);

  return (
    <SafeAreaView style={styles.container}>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                paddingTop: 10,
              }}
              onPress={() => {
                navigation.navigate('Comments Page', {
                  postId: item._id,
                });
              }}>
              {item.media[0] ? (
                <Image
                  source={{uri: item.media[0]}}
                  style={styles.capturedPhoto}
                  resizeMode="contain"
                />
              ) : (
                <Avatar.Icon size={60} icon="car" />
              )}
              <Text style={styles.authtext}>{item.content}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

export default HomePage;
