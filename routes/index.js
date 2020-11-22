var express = require('express');
var router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers');
let travel = require('../controllers/travel')


/* GET home page. */
router.get('/', travel.get_travel);

router.post('/', catchErrors(travel.submit_subscriber));


module.exports = router;
