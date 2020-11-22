const mongoose = require('mongoose');
const Email = require("../models/Email");

exports.get_travel = function(req, res, next) {
    res.render('travel', { title: 'Travel' });
  }

exports.submit_subscriber = async function(req, res) {
    //var item = req.body.subscribe_email;
    //console.log("Email subscriber:", item);
    const email = new Email(req.body)
    await email.save();
    req.flash('success', 'You are now subscribed!');

    res.redirect('/');
  }
