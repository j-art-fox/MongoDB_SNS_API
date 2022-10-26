const { User } = require("../models");

module.exports = {
  async getUser(req, res) {
    try {
      const data = await User.findById(req.params.userId)
      .populate("thoughts")
      .populate("friends", "username email friends");
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);      
    }
  },

  async getAllUsers(req, res) {
    try {
      const data = await User.find();
      res.json(data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  async getAllUsers(req, res) {
    try {
      const data = await User.find();
      res.json(data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  async updateUser(req, res) {
    try {
      const data = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
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
  async postFriend(req, res) {
    try {
      const data = await User.findOneAndUpdate({_id:req.params.userId},{$addToSet: {friends: req.params.friendId}},{new:true});
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async destroyFriend(req, res) {
    try {
      const data = await User.findByIdAndUpdate(req.params.userId, {$pull:{friends: req.params.friendId}});
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

// "req.params" looks at the parameters of the request itself, aka the path/route
// "req.body" looks at the request payload/body, which is is JSON format
