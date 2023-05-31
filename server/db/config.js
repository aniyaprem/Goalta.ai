const mongoose = require("mongoose");
const colors = require('colors');

const connectionDB = ()=>{
    mongoose.connect('mongodb+srv://canwstech:hCk02YuKVvQ0hqyZ@cluster0.kvzhs2i.mongodb.net/aiproject').then(()=>{
        console.log('Database connect successfully !'.yellow.bold);
    }).catch((err)=>{
        console.log(err.red.bold);
    });;
}

module.exports = connectionDB;