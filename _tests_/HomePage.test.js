import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import HomePage from '../components/HomePage'; // Adjust the path as necessary
import { getPost, findUserByEmail } from '../Services/server';
import { getUserEmail, saveUserId } from '../Services/LocalStorage';

jest.mock('../Services/server');
jest.mock('../Services/LocalStorage');

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render loading state initially', () => {
    getPost.mockResolvedValue([]);
    getUserEmail.mockResolvedValue('');

    const { getByText, getByTestId } = render(<HomePage navigation={{ navigate: jest.fn() }} />);

    expect(getByText('Loading...')).toBeTruthy();
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('should fetch and display posts', async () => {
    const posts = [
      { _id: '1', content: 'Post 1', media: [] },
      { _id: '2', content: 'Post 2', media: ['https://example.com/image.jpg'] },
    ];
    getPost.mockResolvedValue(posts);
    getUserEmail.mockResolvedValue('');

    const { getByText, queryByText } = render(<HomePage navigation={{ navigate: jest.fn() }} />);

    await waitFor(() => {
      expect(queryByText('Loading...')).toBeNull();
      expect(getByText('Post 1')).toBeTruthy();
      expect(getByText('Post 2')).toBeTruthy();
    });
  });

  it('should fetch user email and user ID', async () => {
    const email = 'user@example.com';
    const userId = '123';
    getUserEmail.mockResolvedValue(email);
    findUserByEmail.mockResolvedValue({ _id: userId });
    getPost.mockResolvedValue([]);

    render(<HomePage navigation={{ navigate: jest.fn() }} />);

    await waitFor(() => {
      expect(getUserEmail).toHaveBeenCalled();
      expect(findUserByEmail).toHaveBeenCalledWith(email);
      expect(saveUserId).toHaveBeenCalledWith(userId);
    });
  });

  it('should navigate to comments page on post press', async () => {
    const posts = [
      { _id: '1', content: 'Post 1', media: [] },
    ];
    getPost.mockResolvedValue(posts);
    getUserEmail.mockResolvedValue('');
    
    const navigate = jest.fn();
    const { getByText } = render(<HomePage navigation={{ navigate }} />);
    
    await waitFor(() => {
      fireEvent.press(getByText('Post 1'));
      expect(navigate).toHaveBeenCalledWith('Comments Page', { postId: '1' });
    });
  });
});
