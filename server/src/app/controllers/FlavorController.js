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
  async delete(req, res) {
    const { flavor_id } = req.params;

    try {
      const flavor = await Flavor.findByPk(flavor_id);

      if (!flavor) {
        return res.status(400).json({ error: 'id not found' });
      }

      await Flavor.destroy({
        where: {
          id: flavor_id,
        },
      });

      return res.status(200).json();
    } catch (error) {
      return res.status(404).json({ error: 'please fill in the id to delete' });
    }
  },
  async update(req, res) {
    const { flavor_id } = req.params;
    const { name } = req.body;

    const newName = capitalized(name);

    try {
      const response = await Flavor.findByPk(flavor_id);

      if (!response) {
        return res.status(400).json({ error: 'id not found' });
      }

      const flavor = await Flavor.update(
        { name: newName },
        { where: { id: flavor_id } },
      );

      return res.status(200).json(flavor);
    } catch (error) {
      return res.status(404).json({ error: 'please fill in the id to update' });
    }
  },
};
