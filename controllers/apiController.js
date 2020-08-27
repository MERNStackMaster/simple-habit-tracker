const db = require('../models');

module.exports = {
	createMetric: function(req, res) {
		db.Metric.create(req.body).then((data) => {
			console.log(data);

			res.send('Metric successfully created.');
		}).catch(err => err);
	},
	createRecord: function(req, res) {
		db.Record.create(req.body).then((data) => {
			return db.Metric.findOneAndUpdate({
				name: req.body.metric }, {
				$push: { records: data._id }
			}, { new: true });

			res.send('Record successfully added.');
		}).catch(err => err);
	}
};