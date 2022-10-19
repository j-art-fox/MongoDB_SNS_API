const routes = require('express').Router();
const { getAllUsers, postUser } = require('../../controllers/userController');

routes.route('/').get(getAllUsers).post(postUser)


module.exports = routes