const { Model, DataTypes } = require('sequelize');

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        number_order: DataTypes.INTEGER,
        name: DataTypes.STRING,
        personalize: DataTypes.ARRAY(DataTypes.STRING),
        sizebucket: DataTypes.STRING,
        price_total: DataTypes.FLOAT,
        status: DataTypes.BOOLEAN,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Order;
