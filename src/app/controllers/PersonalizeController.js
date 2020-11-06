const Personalize = require('../models/Personalize');
const Flavor = require('../models/Flavor');

module.exports = {
  async store(req, res) {
    const { flavor_id } = req.params;
    const { name, price } = req.body;

    const flavor = await Flavor.findByPk(flavor_id);

    if (!flavor) {
      return res.status(400).json({ error: 'flavor id does not exist' });
    }

    const [personalize] = await Personalize.findOrCreate({
      where: { name, price },
    });

    await flavor.addPersonalize(personalize);

    return res.status(201).json(personalize);
  },
};
