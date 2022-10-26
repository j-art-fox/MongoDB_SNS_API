const routes = require("express").Router();
const {
  getAllUsers,
  postUser,
  destroyUser,
  postFriend,
  destroyFriend
} = require("../../controllers/userController");

routes.route("/:userId?").get(getAllUsers).post(postUser).delete(destroyUser);
routes.route("/:userId/friends/:friendId?").post(postFriend).delete(destroyFriend);

module.exports = routes;
