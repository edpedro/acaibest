const Sizebucket = require('../models/Sizebucket');
const Flavor = require('../models/Flavor');

const capitalized = require('../../utils/capitalized');

module.exports = {
  async index(req, res) {
    const sizebucket = await Sizebucket.findAll({});

    return res.status(200).json(sizebucket);
  },
  async store(req, res) {
    const { flavor_id } = req.params;
    const { name, price } = req.body;

    const newName = capitalized(name);

    try {
      const flavor = await Flavor.findByPk(flavor_id);

      if (!flavor) {
        return res.status(400).json({ error: 'flavor id does not fount' });
      }

      if (!newName) {
        return res.status(400).json({ error: 'please fill in name' });
      }
      if (!price) {
        return res.status(400).json({ error: 'please fill in price' });
      }

      const [sizebucket] = await Sizebucket.findOrCreate({
        where: { name: newName, price },
      });

      await flavor.addSizebucket(sizebucket);

      return res.status(201).json(sizebucket);
    } catch (error) {
      return res
        .status(404)
        .json({ error: 'registration error please try again' });
    }
  },
  async update(req, res) {
    const { sizebucket_id } = req.params;
    const { name, price } = req.body;

    const newName = capitalized(name);

    try {
      const response = await Sizebucket.findByPk(sizebucket_id);

      if (!response) {
        return res.status(400).json({ error: 'name not found' });
      }

      if (!newName) {
        return res
          .status(400)
          .json({ error: 'please fill in the name to update' });
      }

      const sizebucket = await Sizebucket.update(
        { name: newName, price },
        { where: { id: sizebucket_id } },
      );

      return res.status(200).json(sizebucket);
    } catch (error) {
      return res
        .status(404)
        .json({ error: 'please fill in the name to update' });
    }
  },
  async delete(req, res) {
    const { flavor_id } = req.params;
    const { name } = req.body;

    const newName = capitalized(name);

    try {
      const flavor = await Flavor.findByPk(flavor_id);

      if (!flavor) {
        return res.status(400).json({ error: 'id not found' });
      }
      if (!newName) {
        return res
          .status(400)
          .json({ error: 'please fill in the name to delete' });
      }

      const sizebucket = await Sizebucket.findOne({
        where: { name: newName },
      });

      await Sizebucket.destroy({
        where: {
          name: newName,
        },
      });

      await flavor.removeSizebucket(sizebucket);

      return res.status(200).json();
    } catch (error) {
      return res
        .status(404)
        .json({ error: 'please fill in the name to delete' });
    }
  },
};
