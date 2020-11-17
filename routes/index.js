var express = require('express');
var router = express.Router();
let travel = require('../controllers/travel')


/* GET home page. */
router.get('/', travel.get_travel);
router.post('/', travel.submit_subscriber);


module.exports = router;
