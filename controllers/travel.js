
exports.get_travel = function(req, res, next) {
    res.render('travel', { title: 'Express' });
  }

exports.submit_subscriber = function(req, res, next) {
    console.log("Email subscriber:", req.body.subscribe_email);
    res.redirect('/');
  }