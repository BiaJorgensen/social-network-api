const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        }
    },
    {
      toJSON: {getters: true},
      id: false,
    }
);

function formatDate (createdAt) {
    const date = new Date(createdAt);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toLocaleTimeString()
    console.log(`${month} ${day}, ${year} at ${time}`);
    return `${month} ${day}, ${year} at ${time}`
};

module.exports = reactionSchema