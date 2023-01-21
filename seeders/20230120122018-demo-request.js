'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Requests', [
      {
      title: 'Título',
      body: 'Lorem ipsum blablabla',
      UserId:'123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },


  async down (queryInterface, Sequelize) {
    }
};
