const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction')

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
            get: formateDate
        },
        username: {
            type: String,
            required: true,
        },
        // Array of nested documents created with the reactionSchema
        reactions: [Reaction]
    }
);

function formateDate (createdAt) {
    const date = new Date(createdAt);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString()
    console.log(`${month} ${day}, ${year} at ${time}`);
    return `${month} ${day}, ${year} at ${time}`
};

// Virtual property that returns # of user's friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})