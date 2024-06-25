const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    educationLevel: { type: String, required: true },
    gender: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

