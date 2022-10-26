const { getAllThoughts, postThought } = require('../../controllers/thoughtController');

const routes = require('express').Router();

routes.route("/:thoughtId?").get(getAllThoughts).post(postThought);


module.exports = routes;