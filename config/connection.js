const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/mock_sns_DB";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
