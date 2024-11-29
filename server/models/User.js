const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    notes: { type: String },
});

module.exports = mongoose.model('User', userSchema);
