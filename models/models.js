const mongoose = require('mongoose');
const fs = require('fs'); // File system module to read JSON

const userSchema = new mongoose.Schema(JSON.parse(fs.readFileSync('schema.json', 'utf8')).users);
const postSchema = new mongoose.Schema(JSON.parse(fs.readFileSync('schema.json', 'utf8')).posts);
const commentSchema = new mongoose.Schema(JSON.parse(fs.readFileSync('schema.json', 'utf8')).comments);
const notificationSchema = new mongoose.Schema(JSON.parse(fs.readFileSync('schema.json', 'utf8')).notifications);


// Define your models (optional for some frameworks)
const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);
const Comment = mongoose.model('Comment', commentSchema);
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = {User, Post, Comment, Notification}; // Export models for use
