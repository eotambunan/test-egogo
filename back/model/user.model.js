const mongoose = require("mongoose") ;
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: String,
    email: String,
});


const Users = mongoose.model('users', usersSchema);

module.exports =  Users