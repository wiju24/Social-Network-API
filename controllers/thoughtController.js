const {Thought, User} = require('../models');

module.exports = {
// Getting All Thoughts
    getThoughts (req, res) {
        Thought.find()
            .select('-__v')
            .then((allThoughts) => res.json(allThoughts))
            .catch((err) => res.status(500).json(err));
    },

// Getting Single Thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.id})
            .select('-__v')
            .then((singleThought) =>
                !singleThought
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : res.json(singleThought)
            )
            .catch((err) => res.status(500).json(err));
    },

// Creating a Thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((createThought) => res.json(createThought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

//Deleting a Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete ({ _id: req.params.id})
            .then((deleteThought) =>
                !deleteThought
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : User.findOneAndUpdate(
                            {thoughts: req.params.id},
                            {$pull: {thoughts: req.params.id}},
                            {runValidators: true, new: true}
                    )
            )
            .then((user) => 
                !user
                    ? res.status(404).json({message: 'No user with that ID exists!!'})
                    : res.json ({message: "User's Thought was deleted successfully!"})
            )
            .catch((err) => res.status(500).json(err));      
    },

// Updating a Current Thought
    updateThought(req, res) {
        Thought.findOneAndUpdate (
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true}
        )
            .then((updateThought) =>
                !updateThought
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : res.json(updateThought)
            )
            .catch((err) => res.status(500).json(err));
    },

// Removing a old Reaction 
    removeReaction(req, res) {
        Thought.findOneAndDelete (
            { _id: req.params.id},
            { $pull: {reactions: req.params.reactionId}},
            { runValidators: true, new: true }
        )
            .then((remReaction) =>
                !remReaction
                    ? res.status(404).json({message: 'No user with that ID exists'})
                    : res.json(remReaction)
            )
            .catch((err) => res.status(500).json(err))
    },

// Adding a new Reaction
    insertReaction(req, res) {
        Thought.findOneAndUpdate (
            { _id: req.params.id },
            { $addToSet: { reactions: req.params.reactionId}},
            { runValidators: true, new: true }
        )
        .then((insReaction) =>
            !insReaction
                ? res.status(404).json({ message: 'No user with that ID exists'})
                : res.json(insReaction)
        )
        .catch((err) => res.status(500).json(err));
    },
};
