const Flavor = require('../../src/app/models/Flavor');
const Personalize = require('../../src/app/models/Personalize');
const Sizebucket = require('../../src/app/models/Sizebucket');
const Order = require('../../src/app/models/Order');

const models = [Flavor, Personalize, Sizebucket, Order];

module.exports = () => {
  return Promise.all(
    Object.keys(models).map(key => {
      return models[key].destroy({
        truncate: true,
        cascade: true,
        force: true,
      });
    }),
  );
};
