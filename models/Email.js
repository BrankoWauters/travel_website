var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var email_subscriber = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    }
 });

 module.exports = new mongoose.model('Email', email_subscriber);