'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: "2020-02-01",
        nivel_id: 1,
        docente_id: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-02-01",
        nivel_id: 2,
        docente_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-02-01",
        nivel_id: 3,
        docente_id: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2020-07-01",
        nivel_id: 3,
        docente_id: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Turmas', null, {})

  }
};
