var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
	team_id: Number,
	name: String
});

module.exports = mongoose.model('Team', TeamSchema);
