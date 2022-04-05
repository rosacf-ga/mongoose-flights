const Flight = require('../models/flight');
const Ticket = require('../models/ticket') 

module.exports = {
  new: newTicket,
  create
}

function newTicket(req, res){
  let flightId = req.params.id;
    res.render('tickets/new', {flightId});
}


function create(req, res) {
  req.body.flight = req.params.id //allows us to point to actual flight. creats rel btwn ticket and flight
	Ticket.create(req.body, function(err, ticket) {
		res.redirect(`/flights/${req.params.id}`);
    console.log(err)
	});
}