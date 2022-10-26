const { getAllThoughts, postThought } = require('../../controllers/thoughtController');

const routes = require('express').Router();

routes.route("/:thoughtId?").get(getAllThoughts);
routes.route("/:userId").post(postThought);

module.exports = routes;