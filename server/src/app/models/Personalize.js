const { Model, DataTypes } = require('sequelize');

class Personalize extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
      },
      {
        sequelize,
        tableName: 'personalizes',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Flavor, {
      foreignKey: 'personalize_id',
      through: 'flavors_personalizes',
      as: 'flavors',
    });
  }
}

module.exports = Personalize;
