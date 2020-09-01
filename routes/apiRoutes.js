const Router = require('express').Router();
const { createRecord, createMetric, getAllMetrics, getOneMetric } = require('../controllers/apiController');

Router.get('/metrics', getAllMetrics);
Router.get('/metric/:id', getOneMetric);
Router.post('/metric/new', createMetric);

Router.post('/records/new', createRecord);

module.exports = Router;