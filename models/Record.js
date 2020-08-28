const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
	value: {
		type: Boolean,
		required: true
	},
	metric: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
