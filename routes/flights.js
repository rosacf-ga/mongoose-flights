var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights')

//will allow us to read all flights
router.get('/', flightsController.index);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//create new flight
router.post('/', flightsController.create);

//return form to add a new post
router.get('/new', flightsController.new)

module.exports = router;