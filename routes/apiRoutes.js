const Router = require('express').Router();
const { createUser } = require('../controllers/apiController');

Router.get('/', createUser);

module.exports = Router;