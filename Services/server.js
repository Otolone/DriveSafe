import axios from 'axios';

const API_URL = 'https://drivesafe-b191296eaba2.herokuapp.com';  // 'http://192.168.42.79:5001'; // Ensure this URL is correct

// Users
export const postUser = async data => {
  try {
    const response = await axios.post(`${API_URL}/postUser`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error posting user:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

export const updateUserById = async (_id, updateData) => {
  try {
    const response = await axios.put(
      `${API_URL}/updateUserById/${_id}`,
      updateData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error updating user:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};
export const updateUserProfilePicture = async (_id, profilePicture) => {
  try {
    
    const response = await axios.patch(
      `${API_URL}/updateUserProfilePicture/${_id}`,
      profilePicture,
      {
        headers: {
          'Content-Type': 'multipart/form-Data',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error updating Profile picture:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

export const findUserById = async _id => {
  try {
    const response = await axios.get(`${API_URL}/getuserbyId/${_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error getting user:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};
export const findUserByEmail = async email => {
  try {
    const response = await axios.get(`${API_URL}/findUserByEmail/${email}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error getting user:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

// Posts
export const postPost = async data => {
  try {
    const response = await axios.post(`${API_URL}/postPost`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error posting post:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

export const getPost = async () => {
  try {
    const response = await axios.get(`${API_URL}/getPosts`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error getting posts:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

export const getPostById = async _id => {
  try {
    const response = await axios.get(`${API_URL}/getPostbyId/${_id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error getting post by ID:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

export const updatePostById = async (_id, updateData) => {
  try {
    const response = await axios.put(
      `${API_URL}/updatePostById/${_id}`,
      updateData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error updating post by ID:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

// Comments
export const postComment = async data => {
  try {
    const response = await axios.post(`${API_URL}/postComment`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error posting comment:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

export const updateCommentById = async (commentId, updateData) => {
  try {
    const response = await axios.put(
      `${API_URL}/comments/${commentId}`,
      updateData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error updating comment by ID:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

export const getComments = async () => {
  try {
    const response = await axios.get(`${API_URL}/getComments`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Error getting comments:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};
