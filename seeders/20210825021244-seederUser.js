"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        let data = [{
            username: "mamaa",
            email: "kaka@gmail.com",
            password: "skasaksna",
            createdAt: new Date(),
            updatedAt: new Date(),
        }]
        return queryInterface.bulkInsert("Users", data);
    },

    down: (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete("Users", null);
    },
};