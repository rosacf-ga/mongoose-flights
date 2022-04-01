var express = require('express');
var router = express.Router();
const flightsController = require('../controllers/flights')

//will allow us to read/see all flights
router.get('/', flightsController.index);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//create new flight and actually sends it to database 
//its '/' because after we create/submit form we wanna be taken back to index page
router.post('/', flightsController.create);

//return form to add a new post// what you see, empty form
//takes us to this page to start making new post
router.get('/new', flightsController.new)

module.exports = router;