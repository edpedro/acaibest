const Flavor = require('../models/Flavor');

module.exports = {
  async index(req, res) {
    const flavor = await Flavor.findAll({
      include: [
        {
          association: 'personalizes',
          attributes: ['id', 'name', 'price'],
          through: {},
        },
        {
          association: 'sizebuckets',
          attributes: ['id', 'name', 'price'],
          through: {},
        },
      ],
    });

    return res.status(200).json(flavor);
  },
};
