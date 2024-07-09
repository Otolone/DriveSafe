import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {grey} from '../CSS/colors';

import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
//import SettingsPage from './SettingsPage';
import PostUpdatePage from './PostUpdatePage';
//import NotificationService from '../Services/NotificationSevice';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createBottomTabNavigator();

function BottomTabNavigator({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2196F3',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {fontWeight: '100', fontSize: 30},
        tabBarIcon: () => <Icon name="notifications" size={30} color={grey} />,
      }}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} color={grey} />,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: () => <Icon name="person" size={30} color={grey} />,
        }}
      />
      <Stack.Screen
        name="Post Update"
        component={PostUpdatePage}
        options={{
          tabBarIcon: () => <Icon name="chatbox" size={30} color={grey} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default BottomTabNavigator;

/**
 * <Stack.Screen
        name="Post Notification"
        component={NotificationService}
        options={{
          tabBarIcon: () => <Icon name="notifications" size={30} color={grey} />,
        }}
      />
 */