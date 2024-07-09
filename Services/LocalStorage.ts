import AsyncStorage from '@react-native-async-storage/async-storage';

// Save user_id
const saveUserId = async (userId) => {
  try {
    await AsyncStorage.setItem('@user_id', userId);
    console.log('User ID saved successfully:', userId);
  } catch (error) {
    console.error('Error saving user ID', error);
  }
};

// Retrieve user_id
const getUserId = async () => {
  try {
    const userId = await AsyncStorage.getItem('@user_id');
    if (userId !== null) {
      console.log('User ID retrieved successfully:', userId);
      return userId;
    }
    return null;
  } catch (error) {
    console.error('Error retrieving user ID', error);
    return null;
  }
};

// Remove user_id from local storage
const removeUserId = async () => {
  try {
    await AsyncStorage.removeItem('@user_id');
    console.log('User ID removed successfully');
  } catch (error) {
    console.error('Error removing user ID', error);
  }
};

// Save user_email
const saveUserEmail = async (userEmail) => {
  try {
    await AsyncStorage.setItem('@user_email', userEmail);
    console.log('User Email saved successfully:', userEmail);
  } catch (error) {
    console.error('Error saving user email', error);
  }
};

// Retrieve user_email
const getUserEmail = async () => {
  try {
    const userEmail = await AsyncStorage.getItem('@user_email');
    if (userEmail !== null) {
      console.log('User Email retrieved successfully:', userEmail);
      return userEmail;
    }
    return null;
  } catch (error) {
    console.error('Error retrieving user email', error);
    return null;
  }
};

// Remove user_email from local storage
const removeUserEmail = async () => {
  try {
    await AsyncStorage.removeItem('@user_email');
    console.log('User Email removed successfully');
  } catch (error) {
    console.error('Error removing user email', error);
  }
};

export {
  saveUserId,
  getUserId,
  removeUserId,
  saveUserEmail,
  getUserEmail,
  removeUserEmail,
};
