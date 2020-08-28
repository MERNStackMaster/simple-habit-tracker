const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const metricSchema = new Schema({
	name: {
		type: String, // exercise
		required: true
	},
	records: [{
		type: Schema.Types.ObjectId,
		ref: 'Record'
	}]
}, {
	timestamps: true
});

const Metric = mongoose.model('Metric', metricSchema);

module.exports = Metric;