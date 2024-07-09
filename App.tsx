import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './frontend/BottomTabNavigation';

//import NotificationService from './Services/NotificationService';

import SplashPage from './frontend/SplashPage';
import ResetPasswordPage from './frontend/ResetPasswordPage';
import UpdatePasswordPage from './frontend/UpdatePasswordPage';
import CommentsPage from './frontend/CommentsPage';
import SignUpPage from './frontend/SignUpPage';
import SignInPage from './frontend/SignInPage';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: '200', fontSize: 30},
          headerShown: false,
        }}>
         <Stack.Screen
          name="Splash Screen"
          options={{headerShown: false}}
          component={SplashPage}
        />  
        <Stack.Screen
          name="Sign In"
          options={{headerShown: false}}
          component={SignInPage}
        />
        <Stack.Screen
          name="Sign Up"
          options={{headerShown: false}}
          component={SignUpPage}
        />
        <Stack.Screen
          name="Reset Password"
          options={{headerShown: true}}
          component={ResetPasswordPage}
        />
        <Stack.Screen
          name="Update Password"
          options={{headerShown: true}}
          component={UpdatePasswordPage}
        />
         <Stack.Screen
          name="Comments Page"
          options={{headerShown: true}}
          component={CommentsPage}
        />  
        <Stack.Screen name="Bottom Nav" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
