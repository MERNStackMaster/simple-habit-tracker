const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
	value: Boolean
}, {
	timestamps: true
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
