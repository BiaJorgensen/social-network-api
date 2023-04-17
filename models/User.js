const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true 
          },
          email: {
            type: String,
            required: true,
            unique: true,
            // Validate email using email Regex
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
          },
        //  Array of _id values referencing the Thought model
          thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
          ],
        //  Array of _id values referencing the User model  
          friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
          ]
    }
);

// Virtual property that returns # of user's friends
userSchema.virtual('friendCount').get(function () {
        return this.friends.length
    })