const faker = require('faker');
const { factory } = require('factory-girl');

const Personalize = require('../../src/app/models/Personalize');
const Flavor = require('../../src/app/models/Flavor');
const Sizebucket = require('../../src/app/models/Sizebucket');
const Order = require('../../src/app/models/Order');

factory.define('Personalize', Personalize, {
  name: faker.name.findName(),
  price: faker.commerce.price(),
});
factory.define('Sizebucket', Sizebucket, {
  name: faker.name.findName(),
  price: faker.commerce.price(),
});

factory.define('Flavor', Flavor, {
  name: faker.name.findName(),
  price: faker.commerce.price(),
});

factory.define('Order', Order, {
  number_order: faker.random.number(),
  name: faker.name.findName(),
  price: faker.commerce.price(),
  personalize: faker.random.arrayElements(),
  sizebucket: faker.random.arrayElements(),
  price_total: faker.commerce.price(),
});

module.exports = factory;
