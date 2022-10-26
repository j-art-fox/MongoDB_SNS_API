const routes = require("express").Router();
const {
  getAllUsers,
  postUser,
  destroyUser,
  postFriend,
  destroyFriend,
  getUser,
  updateUser,
  
} = require("../../controllers/userController");

routes.route("/").get(getAllUsers).post(postUser);
routes.route("/:userId").get(getUser).delete(destroyUser).put(updateUser);
routes.route("/:userId/friends/:friendId").post(postFriend).delete(destroyFriend);

module.exports = routes;
