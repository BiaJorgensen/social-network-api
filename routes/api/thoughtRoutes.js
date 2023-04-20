const router = require('express').Router();
const {
    getThoughts,
    getOneThought,
    createNewThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController')

// /api/thoughts
router.route('/')
// GET - show all thoughts
.get(getThoughts)
// POST - create new thought
.post(createNewThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
// GET - show one thought
.get(getOneThought)
// PUT - update one thought
.put(updateThought)
// DELETE - delete one thought
.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
// POST - add reaction to thought
.post(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
// DELETE - delete reaction from thought
.delete(removeReaction);

module.exports = router