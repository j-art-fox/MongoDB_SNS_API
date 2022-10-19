const routes = require("express").Router();

const userRoutes = require("./userRoutes");
//thought routes

routes.use("/user", userRoutes);
//routes.use('/thoughts,) thought routes

module.exports = routes;
