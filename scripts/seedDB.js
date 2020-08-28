const db = require('../models');
const mongoose  = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/habittracker';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

function getRandBool() {
	return [true, false][Math.floor(Math.random() * 2)];
}

function getRandMetric(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getRandFrmRng(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function genRandObj(arr) {
	return {
		value: getRandBool(),
		metric: getRandMetric(arr),
		date: `${getRandFrmRng(2010, 2020)}-${getRandFrmRng(1, 12)}-${getRandFrmRng(1, 31)}`
	};
}

db.Metric.find({}).then((data) => {
	const allMetrics = data.map(doc => doc.name);
	const dummyData = [];

	for (let i=0;i<100;i++) {
		dummyData.push(genRandObj(allMetrics));
	};

	console.log(dummyData);

	db.Record.insertMany(dummyData, (err, docs) => {
		if (err) return err;
	
		docs.forEach((doc) => {
			db.Metric.findOneAndUpdate(
				{ name: doc.metric },
				{ $addToSet: { records: doc._id } },
				{ new: true }
			).catch((err) => err);
		});
	});
});

