var express = require('express');
var router = express.Router();
var WeeklySchedule = require('../models/WeeklySchedule');

router.get('/:week', function(req, res, next) {
	WeeklySchedule.find({ week: req.params.week }, function(err, schedule) {
		if (err) return next(err);
		res.json(schedule);
	});
});

router.put('/:week', function(req, res, next) {
	var id = req.body._id;
	var games = req.body.games;
	var week = req.body.week;

	WeeklySchedule.updateOne(
		{ _id: id }, 
		{ $set: { games: games }}, 
		function(err) {
			if (err) return next(err);
		}
	);
	var jsonRes = JSON.stringify({ message: 'Week ' + week + ' schedule has been upated.' });
	res.json(jsonRes);
});

module.exports = router;
