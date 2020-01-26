var mongoose = require('mongoose');
var Game = require('../models/Game');

var WeeklyScheduleSchema = new mongoose.Schema({
	week: Number,
	status: String,
	games: [{
		away: {
			team: {
				team_id: Number,
				name: String
			},
			score: Number,
			instancesChosen: Number
		},
		home: {
			team: {
				team_id: Number,
				name: String
			},
			score: Number,
			instancesChosen: Number
		}
	}]
});

module.exports = mongoose.model('Weeklyschedule', WeeklyScheduleSchema);