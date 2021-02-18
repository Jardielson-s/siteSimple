'use strict';

const { password } = require("../../config/config");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients',{
      id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: Sequelize.INTEGER,

      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate:{
          isEmail: true
        }
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Clients');
  }
};
