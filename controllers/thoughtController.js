const { Thought, User } = require("../models");

module.exports = {
  async getThought(req, res) {
    try {
      const data = await Thought.findById(req.params.thoughtId);
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async getAllThoughts(req, res) {
    try {
      const data = await Thought.find();
      res.json(data);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  async postThought(req, res) {
    try {
      const data = await Thought.create(req.body);
      const userData = await User.findByIdAndUpdate(req.params.userId, {
        $addToSet: { thoughts: data._id },
      });
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  async createReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      res.json(reaction);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  async deleteReaction(req, res) {
    try {
      const data = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions:
          {reactionId: req.params.reactionId}}},
        { runValidators: true, new: true }
      );
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  
};

// "req.params" looks at the parameters of the request itself, aka the path/route
// "req.body" looks at the request payload/body, which is is JSON format
