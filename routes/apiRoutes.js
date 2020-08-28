const Router = require('express').Router();
const { createRecord, createMetric, getAllMetrics } = require('../controllers/apiController');

Router.get('/metrics', getAllMetrics);
Router.post('/metrics/new', createMetric);

Router.post('/records/new', createRecord);

module.exports = Router;