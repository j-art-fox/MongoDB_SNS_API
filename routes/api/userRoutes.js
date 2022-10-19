const routes = require("express").Router();
const {
  getAllUsers,
  postUser,
  destroyUser,
} = require("../../controllers/userController");

routes.route("/:userId?").get(getAllUsers).post(postUser).delete(destroyUser);

module.exports = routes;
