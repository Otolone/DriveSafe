import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../components/HomePage';
import SignInPage from '../components/SignInPage';
import { getPost, findUserByEmail, signIn } from '../Services/server';
import { getUserEmail, saveUserId } from '../Services/LocalStorage';

jest.mock('../Services/server');
jest.mock('../Services/LocalStorage');

const Stack = createStackNavigator();

function TestNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

describe('Integration Test for SignInPage and HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should navigate to HomePage after successful sign-in', async () => {
    const posts = [
      { _id: '1', content: 'Post 1', media: [] },
      { _id: '2', content: 'Post 2', media: ['https://example.com/image.jpg'] },
    ];
    getUserEmail.mockResolvedValue('');
    getPost.mockResolvedValue(posts);
    signIn.mockResolvedValue({ success: true });
    findUserByEmail.mockResolvedValue({ _id: '123' });

    const { getByText, getByPlaceholderText } = render(<TestNavigator />);

    fireEvent.changeText(getByPlaceholderText('Email'), 'user@example.com');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Sign In'));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('user@example.com', 'password');
      expect(getByText('Loading...')).toBeTruthy();
    });

    await waitFor(() => {
      expect(getByText('Post 1')).toBeTruthy();
      expect(getByText('Post 2')).toBeTruthy();
    });
  });
});
