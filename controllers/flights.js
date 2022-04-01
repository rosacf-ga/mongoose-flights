const Flight = require('../models/flights');

module.exports = {
  index,
	create, 
	new: newFlight
}

function index (req, res){
  Flight.find({}, function(err, flights){
    res.render('flights/index', {
      flights
    })
  })
}

function create(req, res){}

function newFlight(req, res){
	res.render('flights/new')
}