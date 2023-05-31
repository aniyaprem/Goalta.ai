const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is must required !']
    },
    email:{
        type:String,
        unique:true,
        required:[true, 'Email is must required !']
    },
    phone:{
        type:String,
        // required:[true, 'Phone is must required !'],
        // min:[10, 'Minimum 10 numbers is required !']
    },
    image:{
        type:String,
        default:null
    },
    role:{
        type:String,
        enum: ['admin', 'user'],
        default:'user'
    },
    password:{
        type:String,
        required:[true, 'Password is must required !']
    },
});

const User = mongoose.model('users', UserSchema);
module.exports = User;