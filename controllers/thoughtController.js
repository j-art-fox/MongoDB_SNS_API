const { Thought } = require("../models");

module.exports = {
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
      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

// "req.params" looks at the parameters of the request itself, aka the path/route
// "req.body" looks at the request payload/body, which is is JSON format
