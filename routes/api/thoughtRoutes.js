const { getAllThoughts, postThought, getThought, createReaction, deleteReaction } = require('../../controllers/thoughtController');

const routes = require('express').Router();

routes.route("/").get(getAllThoughts);
routes.route("/:thoughtId").get(getThought);
routes.route("/:thoughtId/reactions").post(createReaction);
routes.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
routes.route("/:userId").post(postThought);

module.exports = routes;