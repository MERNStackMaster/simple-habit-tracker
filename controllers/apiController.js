const db = require('../models');

module.exports = {
	createMetric: function (req, res) {
		console.log(req.body);

		db.Metric.create(req.body)
			.then((data) => {
				console.log('This line won\'t run.');
				console.log(data);
				res.send('Metric successfully created.');
			})
			.catch(err => {
				res.send(err)
			});
	},
	getAllMetrics: function (req, res) {
		db.Metric.find({}).populate('records').then((data) => {
			res.json(data);
		}).catch(err => err);
	},
	createRecord: function (req, res) {
		const now = new Date();
		const today = `${now.getFullYear()}-${(now.getMonth()) + 1}-${now.getDate()}`; // 2020-08-27

		console.log('This line ran');
		console.log(today);



		db.Record.findOneAndUpdate(
			{ date: today, metric: req.body.metric }, // needs to check based on record id
			req.body,
			{ upsert: true, new: true }
		).then((data) => {
			return db.Metric.findOneAndUpdate(
				{ name: req.body.metric },
				{ $addToSet: { records: data._id } },
				{ new: true }
			).then(() => res.status(200).end());
		}).catch(err => err);
	}
};