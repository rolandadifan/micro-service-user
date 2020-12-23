'use strict';
const bycrpt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('users', [
       {
        name: 'Rolanda',
        profession: "developer",
        role: 'admin',
        email: 'rolanda@gmail.com',
        password: await bycrpt.hash('rolanda123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'helmi',
        profession: "frondend",
        role: 'student',
        email: 'helmi@gmail.com',
        password: await bycrpt.hash('rolanda123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
