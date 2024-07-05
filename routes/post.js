const {Post} = require('../models/models');
const mongoose = require('mongoose');

const postPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    newPost._id = new mongoose.Types.ObjectId();
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    //console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
};
const getPostById = async (req, res) => {
  
  try {
    const posts = await Post.findById(req.params.id);
    res.status(201).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
};
const updatePostById = async (req, res) => {
  try {
    // Check if the postId is valid (e.g., a valid MongoDB ObjectID)
    const postId = req.params.id;
    // Check if the postId is valid (e.g., a valid MongoDB ObjectID)
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).send('Invalid ID format');
  }
  const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
    new: true,
  });
  if (!updatedPost) {
      return res.status(404).send('The user with the given ID was not found.');
    }
    res.status(201).json(updatedPost);
  } catch (error) {
    res.status(400).send(error.message);
  }
};



module.exports = {postPost, getPosts, getPostById, updatePostById};
