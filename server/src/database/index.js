const Sequelize = require('sequelize');

const Flavor = require('../app/models/Flavor');
const Personalize = require('../app/models/Personalize');
const Sizebucket = require('../app/models/Sizebucket');
const Order = require('../app/models/Order');

const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

Personalize.init(connection);
Flavor.init(connection);
Sizebucket.init(connection);
Order.init(connection);

Flavor.associate(connection.models);
Personalize.associate(connection.models);
Sizebucket.associate(connection.models);

module.exports = connection;
