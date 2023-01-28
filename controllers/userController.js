const { User, Thought} = require('../models');

module.exports = {
// Getting All Users
    getUsers (req, res) {

        //console.log("Req: ", req)
        //console.log("Body: ", req.body)
        User.find()
            .select('-__v')
            .then((allUsers) => res.json(allUsers))
            .catch((err) => res.status(500).json(err));
    },

// Getting Single User
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.id})
            .select('-__v')
            .then((singleUser) =>
                !singleUser
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : res.json(singleUser)
            )
            .catch((err) => res.status(500).json(err));
    },

// Creating a User
    createUser(req, res) {
       // console.log("Req Body: ", req.body);
        User.create(req.body)
            .then((createUser) => res.json(createUser))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

//Deleting a User
    deleteUser(req, res) {
        User.findOneAndDelete ({ _id: req.params.id})
            .then((deleteUser) =>
                !deleteUser
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : Thought.deleteMany ({ _id: {$in: deleteUser.thoughts}})
            )
            .then(() => res.json({message: 'User and their thoughts have been successfully deleted!'}))
            .catch((err) => res.status(500).json(err));
    },

// Updating a Current User
    updateUser(req, res) {
        User.findOneAndUpdate (
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true}
        )
            .then((updateUser) =>
                !updateUser
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : res.json(updateUser)
            )
            .catch((err) => res.status(500).json(err));
    },

// Removing a old Friend 
    removeFriend(req, res) {
        User.findOneAndDelete (
            { _id: req.params.id,},
            { $pull: {friends: req.params.friendId}},
            { runValidators: true, new: true }
        )
            .then((remFriend) =>
                !remFriend
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : res.json(remFriend)
            )
            .catch((err) => res.status(500).json(err))
    },

// Adding a new friend
    insertFriend(req, res) {
        User.findOneAndUpdate (
            { _id: req.params.id },
            { $addToSet: { friends: req.params.friendId}},
            { runValidators: true, new: true }
        )
        .then((insFriend) =>
            !insFriend
                ? res.status(404).json({ message: 'No user with that ID exists'})
                : res.json(insFriend)
        )
        .catch((err) => res.status(500).json(err));
    },
};