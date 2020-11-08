const faker = require('faker');
const { factory } = require('factory-girl');

const Personalize = require('../../src/app/models/Personalize');
const Flavor = require('../../src/app/models/Flavor');

factory.define('Personalize', Personalize, {
  name: faker.name.findName(),
  price: faker.commerce.price(),
});

factory.define('Flavor', Flavor, {
  name: faker.name.findName(),
  price: faker.commerce.price(),
});

module.exports = factory;
