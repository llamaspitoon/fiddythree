var mongoose = require('mongoose');
var Team = require('../models/Team');

var TeamGameData = new mongoose.Schema({
	team: { 
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Team'
	},
	score: Number
});

var GameSchema = new mongoose.Schema({
	away: TeamGameData,
	home: TeamGameData
});

module.exports = mongoose.model('Game', GameSchema);
