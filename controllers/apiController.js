const db = require('../models');

module.exports = {
	createUser: function(req, res) {
		db.User.create(req.body)
			.then(data => {
				console.log(data);

				res.send('User successfully added.');
			})
			.catch(err => console.log(err));
	},
	testCreateMetric: function(req, res) {
		db.Metric.create({
			name: 'Exercise'
		}).then((data) => {
			console.log(data);

			res.send('Metric successfully created.');
		}).catch(err => err);
	},
	testCreateRecord: function(req, res) {
		db.Record.create({
			value: false,
			metric: 'Exercise'
		}).then((data) => {
			return db.Metric.findOneAndUpdate({
				name: 'Exercise' }, {
				$push: { records: data._id }
			}, { new: true });

			res.send('Record successfully added.');
		}).catch(err => err);
	}
};