const Router = require('express').Router();
const { createRecord, createMetric } = require('../controllers/apiController');

Router.post('/metrics/new', createMetric);

Router.post('/records/new', createRecord);

module.exports = Router;