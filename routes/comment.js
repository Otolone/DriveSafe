const {Comment} = require('../models/models');
const mongoose = require('mongoose');

const postComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    newComment._id = new mongoose.Types.ObjectId();
    newComment.createdAt = Date();
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getComments= async (req, res) => {
  try {
    const comments= await Comment.find();
    res.json(comments);
  } catch (error) {
    //console.error('Error fetching posts:', error);
    res.status(500).send('Internal Server Error');
  }
};
const updateCommentById = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedComment) {
      return res.status(404).send('The user with the given ID was not found.');
    }
    res.status(201).json(updatedComment);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {postComment, getComments, updateCommentById};
