const { User, Thought } = require('../models')

module.exports = {
    // Get all Users
    getUsers(req, res) {
        // No parameters to find all users
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },

    //   Get one User by its ID
      getOneUser(req, res) {
        // Use paremeter (the ID in this case) on search bar to find one user
        User.findOne({ _id: req.params.userId})
        .then((user) =>
        user ? res.json(user) : res.status(404).json({ message: 'No user found with that ID' }) 
        ).catch((err) => res.status(500).json(err));
      },

    //   Create new User
    createNewUser(req, res) {
        User.create(req.body)
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err))
    },

    // Update user according to info provided in Body, using $set so only values in body are updated
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
        .then((user) => user ? res.json(user) : res.status(404).json({ message: 'No user found with that ID' }))
        .catch((err) => res.status(500).json(err))
    },

    // Delete user according to info provided in Body
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => user ? res.json({ message: 'User has been deleted'}) : res.status(404).json({ message: 'No user found with that ID' }))
        .catch((err) => res.status(500).json(err))
    },

    // Add Friend to User using $addToset
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId} }, { runValidators: true, new: true })
        .then((user) => user ? res.json(user) : res.status(404).json({ message: 'No user found with that ID' }))
        .catch((err) => res.status(500).json(err))
    },

    // Remove Friend from User using $pull
    removeFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId} }, { runValidators: true, new: true })
        .then((user) => user ? res.json(user) : res.status(404).json({ message: 'No user found with that ID' }))
        .catch((err) => res.status(500).json(err))
    }
}