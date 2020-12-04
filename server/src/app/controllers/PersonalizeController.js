const Personalize = require('../models/Personalize');
const Flavor = require('../models/Flavor');

const capitalized = require('../../utils/capitalized');

module.exports = {
  async index(req, res) {
    const personalize = await Personalize.findAll({});

    return res.status(200).json(personalize);
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

      const [personalize] = await Personalize.findOrCreate({
        where: { name: newName, price },
      });

      await flavor.addPersonalize(personalize);

      return res.status(201).json(personalize);
    } catch (error) {
      return res
        .status(404)
        .json({ error: 'registration error please try again' });
    }
  },
  async update(req, res) {
    const { personalize_id } = req.params;
    const { name } = req.body;

    const newName = capitalized(name);

    try {
      const response = await Personalize.findByPk(personalize_id);

      if (!response) {
        return res.status(400).json({ error: 'name not found' });
      }

      if (!newName) {
        return res
          .status(400)
          .json({ error: 'please fill in the name to update' });
      }

      const pesonalize = await Personalize.update(
        { name: newName },
        { where: { id: personalize_id } },
      );

      return res.status(200).json(pesonalize);
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

      const personalize = await Personalize.findOne({
        where: { name: newName },
      });

      await Personalize.destroy({
        where: {
          name: newName,
        },
      });
      await flavor.removePersonalize(personalize);

      return res.status(200).json();
    } catch (error) {
      return res
        .status(404)
        .json({ error: 'please fill in the name to delete' });
    }
  },
};
