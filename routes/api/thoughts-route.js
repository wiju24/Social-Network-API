const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
    removeReaction,
    insertReaction,
} = require ('../../controllers/thoughtController');

// ----- '/' route for thoughts ----- //

router.route('/')
    .get(getThoughts)
    .post(createThought);

// ----- '/:id' route for specific thoughts ----- //

router.route('/:id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// ----- '/:id' route for specific reactions ----- //

router.route('/:id/reaction/:reactionId')
    .post(insertReaction)
    .delete(removeReaction);

module.exports = router;