const express = require('express');

const FlavorController = require('./app/controllers/FlavorController');
const PersonalizeController = require('./app/controllers/PersonalizeController');
const BucketController = require('./app/controllers/BucketController');
const SizebucketController = require('./app/controllers/SizebucketController');

const routes = express.Router();

routes.get('/flavors', FlavorController.index);
routes.post('/flavors', FlavorController.store);

routes.get('/persons', PersonalizeController.index);
routes.post('/persons/:flavor_id', PersonalizeController.store);
routes.put('/persons/:personalize_id', PersonalizeController.update);
routes.delete('/persons/:flavor_id', PersonalizeController.delete);

routes.get('/bucket', BucketController.index);

routes.get('/sizebucket', SizebucketController.index);
routes.post('/sizebucket/:flavor_id', SizebucketController.store);
routes.put('/sizebucket/:sizebucket_id', SizebucketController.update);
routes.delete('/sizebucket/:flavor_id', SizebucketController.delete);

module.exports = routes;
