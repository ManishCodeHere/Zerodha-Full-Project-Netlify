const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
});

// Add passport-local-mongoose plugin
UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const UserModel = mongoose.model("user", UserSchema);

module.exports = { UserModel };