const express = require('express');

const FlavorController = require('./app/controllers/FlavorController');
const PersonalizeController = require('./app/controllers/PersonalizeController');
const BucketController = require('./app/controllers/BucketController');
const SizebucketController = require('./app/controllers/SizebucketController');
const OrderController = require('./app/controllers/OrderController');

const routes = express.Router();

routes.get('/orders', OrderController.index);
routes.get('/orders/:number_order', OrderController.showId);
routes.delete('/orders/:number_order', OrderController.delete);
routes.post('/orders', OrderController.store);

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
