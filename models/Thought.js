const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: String,
            required: true,
        },
        // Array of nested documents created with the reactionSchema
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
            id: false, 
    }
);

function formatDate (createdAt) {
    return dayjs(createdAt).format('MMMM DD, YYYY [at] hh:mm A');
}

// Virtual property that returns # of user's friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought