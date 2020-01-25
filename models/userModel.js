var mongoose = require('mongoose');

// Schema contstuctor reference
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username required!"
    },
    password: {
        type: String,
        trim: true,
        required: "Password required"
        // Add validations later, discuss with group.
    },
    firstName: {
        type: String,
        trim: true,
        required: "First name required"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Last name required"
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    userCreated: {
        type: Date,
        default: Date.now
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;

