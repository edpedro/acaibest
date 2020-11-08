const express = require('express');

const FlavorController = require('./app/controllers/FlavorController');
const PersonalizeController = require('./app/controllers/PersonalizeController');

const routes = express.Router();

routes.get('/flavors', FlavorController.index);
routes.post('/flavors', FlavorController.store);

routes.get('/persons', PersonalizeController.index);
routes.post('/persons/:flavor_id', PersonalizeController.store);
routes.put('/persons/:personalize_id', PersonalizeController.update);
routes.delete('/persons/:flavor_id', PersonalizeController.delete);

module.exports = routes;
