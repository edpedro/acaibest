const Flavor = require('../../src/app/models/Flavor');

const Personalize = require('../../src/app/models/Personalize');

const models = [Flavor, Personalize];

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
