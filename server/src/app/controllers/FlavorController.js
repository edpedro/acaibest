const Flavor = require('../models/Flavor');

module.exports = {
  async index(req, res) {
    const flavor = await Flavor.findAll();

    return res.status(200).json(flavor);
  },
  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res
        .status(400)
        .json({ error: { message: 'Name does not exist' } });
    }

    const checkName = await Flavor.findOne({ where: { name } });

    if (checkName) {
      return res.status(400).json({ error: { message: 'duplicate name' } });
    }

    const flavor = await Flavor.create(req.body);

    return res.status(201).json(flavor);
  },
};
