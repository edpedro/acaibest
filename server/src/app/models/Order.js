const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        number_order: DataTypes.INTEGER,
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        personalize: DataTypes.ARRAY(DataTypes.JSON),
        sizebucket: DataTypes.ARRAY(DataTypes.JSON),
        price_total: DataTypes.FLOAT,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Order;
