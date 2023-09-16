const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: String,
    password: String,
    role: {
        type: String,
        default: "Customer"
    }
});
module.exports = mongoose.model('User', UserSchema);