const { User, Thought } = require('../models')

module.exports = {
    // Get all Thoughts
    getThoughts(req, res) {
        // No parameters to find all thoughts
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
      },

    // Get one Thought by its ID
      getOneThought(req, res) {
        // Use paremeter (the ID in this case) on search bar to find one thought
        Thought.findOne({ _id: req.params.thoughtId})
        .then((thought) =>
        thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with that ID' }) 
        ).catch((err) => res.status(500).json(err));
      },

    // Create a new thought
    createNewThought(req, res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            // Add new thought ID to User
            return User.findOneAndUpdate({ username: req.body.username }, 
                { $push: { thoughts: thoughtData._id} }, 
                { runValidators: true, new: true })
            })
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(500).json(err.message))
    },

    // Update thoguht by its ID according to info provided in Body, using $set so only values in body are updated
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { runValidators: true, new: true })
        .then((thought) => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with that ID' }))
        .catch((err) => res.status(500).json(err))
    },

    // Delete thought according to its ID in the search params
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) => thought ? res.json({ message: 'Thought has been deleted'}) : res.status(404).json({ message: 'No thought found with that ID' }))
        .catch((err) => res.status(500).json(err))
    },

    // Add a new reaction to a thought
    addReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.body} }, { runValidators: true, new: true })
        .then((thought) => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with that ID, reaction cannot be added' }))
        .catch((err) => res.status(500).json(err))
    },

    // Remove reaction from Thought using $pull
    removeReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reaction: { reactionId: req.params.reactionId }} }, { runValidators: true, new: true })
        .then((thought) => thought ? res.json(thought) : res.status(404).json({ message: 'No thought found with that ID, reaction cannot be deleted' }))
        .catch((err) => res.status(500).json(err))
    }     
}


