module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('flavors_personalizes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      flavor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'flavors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      personalize_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'personalizes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('flavors_personalizes');
  },
};
