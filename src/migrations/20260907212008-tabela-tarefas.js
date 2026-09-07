'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tarefas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      detalhamento: {
        type: Sequelize.STRING,
        allowNull: true
      },
      concluida: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tarefas");
  }
};