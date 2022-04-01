const Flight = require('../models/flight');

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

function create(req, res){
	const flight = new Flight(req.body);
	flight.save(function(err) {
		// one way to handle errors
		if (err) return res.render('flights/new');
		res.redirect('/flights');
});
}

function newFlight(req, res){
	res.render('flights/new') //will take us to new.ejs
}