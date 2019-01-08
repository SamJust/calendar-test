const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    login: String,
    password: String
});

const User = mongoose.model('users', schema);

module.exports = {
    GetUser: async function (login) {
        try {
            const user = await User.findOne({ login });
            return user;
        } catch (err) {
            console.err(err);
            return null;
        }
    }
};