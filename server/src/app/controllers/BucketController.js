const Flavor = require('../models/Flavor');

module.exports = {
  async index(req, res) {
    const flavor = await Flavor.findAll({
      attributes: ['name', 'price'],
      include: [
        {
          association: 'personalizes',
          attributes: ['name', 'price'],
          through: {
            attributes: [],
          },
        },
        {
          association: 'sizebuckets',
          attributes: ['name', 'price'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return res.status(200).json(flavor);
  },
};
