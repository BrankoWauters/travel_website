//const { mongo } = require("mongoose");

exports.get_travel = function(req, res, next) {
    res.render('travel', { title: 'Express' });
  }

exports.submit_subscriber = function(req, res, next) {
    var item = req.body.subscribe_email;
    console.log("Email subscriber:", item);
    

    res.redirect('/');
  }