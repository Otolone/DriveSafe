const {Notification} = require('../models/models');

const getNotification = async (req, res) => {
  try {
    const newNotification = new Notification(req.body);
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {getNotification};
