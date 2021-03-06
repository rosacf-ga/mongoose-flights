const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
  index,
	create, 
	new: newFlight, 
	show
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
		res.redirect(`/flights/${flight._id}`);
});
}

function newFlight(req, res){
	const newFlight = new Flight();
// Obtain the default date
	const dt = newFlight.departs;
// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/new', {departsDate}); //will take us to new.ejs
}

function show(req, res){
	
	Flight.findById(req.params.id, function(err, flight){ //allows us to access specific flight by its id
		console.log(err, 'line 40')
		console.log(flight)
		Ticket.find({flight: flight._id}, function(err, tickets){
		console.log(err, 'line 42')
			res.render('flights/show', {flight, tickets});
		})
	})
}