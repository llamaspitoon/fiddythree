var express = require('express');
var router = express.Router();
var Pick = require('../models/Pick');

router.post('/', function(req, res, next) {
	var PickSet = new Pick(req.body);
	PickSet.save(function(err) {
		if (err) return next(err);
		res.json({message: 'Your picks have been saved'});
	});
});

router.put('/', function(req, res, next) {
	var weeklyPicksEntries = req.body;

	weeklyPicksEntries.forEach(function(picksEntry) {
		Pick.updateOne(
			{ _id: picksEntry._id },
			{ $set: { numberCorrect: picksEntry.numberCorrect }},
			function(err) {
				if (err) return next(err);
			}
		);
	});
	res.json({message: 'Pick entries have been updated'});
});

router.get('/:weekNumber/:player', function(req, res, next) {
	Pick.find({
		weekNumber: req.params.weekNumber,
		player: req.params.player
	}, function(err, picks) {
		if (err) return next(err);
		res.json(picks);
	});
});

router.get('/:weekNumber/:gameType', function(req, res, next) {
	Pick.find({
		weekNumber: req.params.weekNumber,
		gameType: req.params.gameType
	}, function(err, picks) {
		if (err) return next(err);
		res.json(picks);
	});
});

router.get('/:weekNumber', function(req, res, next) {
	Pick.find({
		weekNumber: req.params.weekNumber
	}, function(err, picks) {
		if (err) return next(err);
		res.json(picks);
	});
});

router.get('/:weekNumber/get-winner/:admin', function(req, res, next) {
	Pick.find({
		weekNumber: req.params.weekNumber,
		player: req.params.admin
	}, function(err, adminPicks) {
		if (err) return next(err);
		res.json(adminPicks);
	});
});

module.exports = router;
