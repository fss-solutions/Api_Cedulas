const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
    login: Sequelize.STRING,
    password: Sequelize.STRING,
});

const Cedula = sequelize.define('fisico', {
    cedula: Sequelize.STRING,
    nombre: Sequelize.STRING,
    nombre_juri: Sequelize.STRING,
    apellidos: Sequelize.STRING,
    clasificacion: Sequelize.STRING
});

module.exports = {
    User,
    Cedula
}