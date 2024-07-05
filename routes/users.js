const {User} = require('../models/models');
const mongoose = require('mongoose');

const postUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    newUser._id = new mongoose.Types.ObjectId();
    newUser.profilePicture = '';
    newUser.createdAt = Date();
    newUser.updatedAt = Date();
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send('The user with the given ID was not found.');
    }
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updateUserProfilePicture = async (req, res) => {
  const _Id = req.params.id;
  const profilePicture = req.body  
  try {
    if(!profilePicture){
      return res.status(400).send('No file uploaded');
    }
    const updatedUser = await User.findByIdAndUpdate(_Id, profilePicture, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send('The user with the given ID was not found.');
    }
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
   if (!user) {
      return res.status(404).send('The user with the given ID was not found.');
    }
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {postUser, updateUserById, findUserById, updateUserProfilePicture };
