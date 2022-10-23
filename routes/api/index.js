const routes = require("express").Router();

const userRoutes = require("./userRoutes");
const thoughtRoutes = require("./thoughtRoutes")


routes.use("/user", userRoutes);
routes.use("/thought", thoughtRoutes);

module.exports = routes;
