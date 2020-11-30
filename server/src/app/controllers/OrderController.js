const Order = require('../models/Order');

module.exports = {
  async index(req, res) {
    const order = await Order.findAll({ raw: true });

    return res.status(200).json(order);
  },
  async store(req, res) {
    try {
      const {
        number_order,
        name,
        personalize,
        sizebucket,
        price_flavor,
        price_sizeBucket,
        price_person,
      } = req.body;

      const checkNumerOrder = await Order.findOne({ where: { number_order } });

      if (checkNumerOrder) {
        return res.status(400).json({ error: 'order_number already exists' });
      }

      if (!number_order) {
        return res.status(400).json({ error: 'order_number not found' });
      }
      if (!name) {
        return res.status(400).json({ error: 'name not found' });
      }
      if (!sizebucket) {
        return res.status(400).json({ error: 'sizebucket not found' });
      }
      const newPrice_total = price_flavor + price_sizeBucket + price_person;

      const order = await Order.create({
        number_order,
        name,
        personalize,
        sizebucket,
        price_total: newPrice_total,
      });

      return res.status(201).json(order);
    } catch (error) {
      return res
        .status(404)
        .json({ error: 'registration error please try again' });
    }
  },
  async showId(req, res) {
    const { number_order } = req.params;

    const order = await Order.findOne({ where: { number_order } });

    if (!order) {
      return res.status(400).json({ error: 'order_number not found' });
    }

    return res.status(200).json(order);
  },
  async delete(req, res) {
    const { number_order } = req.params;

    const order = await Order.findOne({ where: { number_order } });

    if (!order) {
      return res.status(400).json({ error: 'order_number not found' });
    }

    await Order.destroy({ where: { number_order } });

    return res.status(200).json();
  },
};
