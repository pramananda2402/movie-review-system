const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://pramananda:2002@localhost:5432/postgres', {
    dialect: 'postgres',
    logging: false, // Disable logging
});

module.exports = sequelize;
