const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
// GET - show all users
.get(getUsers)
// POST - create user
.post(createNewUser);

// /api/users/:userId
router.route('/:userId')
// GET - one user
.get(getOneUser)
// PUT - update one user
.put(updateUser)
// DELETE - delete one user
.delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
// POST - add friend to user (friend ID comes from a user ID)
.post(addFriend)
// DELETE - removes friend from user
.delete(removeFriend);

module.exports = router