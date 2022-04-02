const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema; 

const destinationSchema = new Schema ({
	airport: {
		type: String, 
		enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
	}, 
	arrival: {
		type: Date, 
		default: function(){
			let today = new Date(); 
			let nextYear = today.setFullYear(today.getFullYear()+1);
			return nextYear
		}
	}
})

const flightSchema = new Schema({
    airline: {
			type: String, 
			enum: ['American', 'Delta', 'Southwest', 'United']
		},
    airport:  {
			type: String, 
			enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
		},
		flightNo: {
			type: Number,
			required: true,
			min: 10, 
			max: 9999
		},
    departs: {
			type: Date, 
			default: function(){
				let today = new Date(); 
				let nextYear = today.setFullYear(today.getFullYear()+1);
				return nextYear
			}
		}, 
	destinations: [destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema);