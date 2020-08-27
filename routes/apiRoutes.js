const Router = require('express').Router();
const { createUser, testCreateMetric, testCreateRecord } = require('../controllers/apiController');

Router.get('/', createUser);

Router.post('/testmetric', testCreateMetric);

Router.post('/testrecord', testCreateRecord);

module.exports = Router;