const Flavor = require('../models/Flavor');
const capitalized = require('../../utils/capitalized');

module.exports = {
  async index(req, res) {
    const flavor = await Flavor.findAll();

    return res.status(200).json(flavor);
  },
  async store(req, res) {
    const { name, price } = req.body;
    const newName = capitalized(name);

    if (!newName) {
      return res
        .status(400)
        .json({ error: { message: 'Name does not exist' } });
    }

    const checkName = await Flavor.findOne({ where: { name: newName } });

    if (checkName) {
      return res.status(400).json({ error: { message: 'duplicate name' } });
    }

    const flavor = await Flavor.create({
      name: newName,
      price,
    });

    return res.status(201).json(flavor);
  },
};
