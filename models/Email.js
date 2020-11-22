var mongoose = require('mongoose');


var email_subscriber = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    }
 });

 module.exports = new mongoose.model('Email', email_subscriber);