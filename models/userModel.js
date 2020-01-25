import mongoose from 'mongoose';

// Schema contstuctor reference
var Schema = mongoose.Schema;

var UserSchema = new Schema({
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

