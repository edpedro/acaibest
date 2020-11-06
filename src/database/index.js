const Sequelize = require('sequelize');

const Flavor = require('../app/models/Flavor');
const Personalize = require('../app/models/Personalize');

const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

Personalize.init(connection);
Flavor.init(connection);

Flavor.associate(connection.models);
Personalize.associate(connection.models);

module.exports = connection;
