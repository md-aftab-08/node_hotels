const mongoose = require('mongoose');
require('dotenv').config();
// const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
const mongoURL_ = process.env.MONGODB_URL;

mongoose.connect(mongoURL_);

const db = mongoose.connection;
db.on('connected', () => {
    console.log("Connected to mongoDB server !");
});

db.on('error', (err) => {
    console.log("MongoDB connection error !", err);
});

db.on('disconnected', () => {
    console.log("Disconnected to mongoDB server !");
});

module.exports = db;