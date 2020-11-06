const express = require('express');

const FlavorController = require('./app/controllers/FlavorController');
const PersonalizeController = require('./app/controllers/PersonalizeController');

const routes = express.Router();

routes.get('/flavors', FlavorController.index);
routes.post('/flavors', FlavorController.store);

routes.post('/persons/:flavor_id', PersonalizeController.store);

module.exports = routes;
