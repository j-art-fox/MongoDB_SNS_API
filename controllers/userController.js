const { User } = require("../models");

module.exports = {
  async getAllUsers(req, res) {
    try {
      const data = await User.find();
      res.json(data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  async postUser(req, res) {
    try {
      const data = await User.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async destroyUser(req, res) {
    try {
      const data = await User.findOneAndDelete(req.params.userId);
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  //Friends
  async getAllFriends(req, res) {
    try {
      const data = await User.find()
      req.json(data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  async postFriend(req, res) {
    try {
      const data = await User.findOneAndUpdate({_id:req.params.userId},{$addToSet: {friends: req.params.friendId}});
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async destroyFriend(req, res) {
    try {
      const data = await User.findOneAndDelete(req.params.userId);
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

// "req.params" looks at the parameters of the request itself, aka the path/route
// "req.body" looks at the request payload/body, which is is JSON format
