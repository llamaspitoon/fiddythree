var mongoose = require('mongoose');

var PickSchema = new mongoose.Schema({
    weekNumber: Number,
    gameType: Number,
	player: String,
	picks: [Number],
	evm_picks: String,
	numberCorrect: Number
});

module.exports = mongoose.model('Pick', PickSchema);
