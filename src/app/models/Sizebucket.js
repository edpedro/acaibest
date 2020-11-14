const { Model, DataTypes } = require('sequelize');

class Sizebucket extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
      },
      {
        sequelize,
        tableName: 'sizebuckets',
      },
    );
  }

  static associate(models) {
    this.belongsToMany(models.Flavor, {
      foreignKey: 'sizebucket_id',
      through: 'flavors_sizebuckets',
      as: 'flavors',
    });
  }
}

module.exports = Sizebucket;
