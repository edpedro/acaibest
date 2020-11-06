const { Model, DataTypes } = require('sequelize');

class Flavor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Personalize, {
      foreignKey: 'flavor_id',
      through: 'flavors_personalizes',
      as: 'personalizes',
    });
  }
}

module.exports = Flavor;
