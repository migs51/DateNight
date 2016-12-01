'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      concerts: {
        type: Sequelize.STRING
      },
      outdoor: {
        type: Sequelize.STRING
      },
      fine_arts: {
        type: Sequelize.STRING
      },
      sports: {
        type: Sequelize.STRING
      },
      festivals: {
        type: Sequelize.STRING
      },
      comedy: {
        type: Sequelize.STRING
      },
      italian: {
        type: Sequelize.STRING
      },
      mexican: {
        type: Sequelize.STRING
      },
      asian: {
        type: Sequelize.STRING
      },
      seafood: {
        type: Sequelize.STRING
      },
      american: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('profiles');
  }
};