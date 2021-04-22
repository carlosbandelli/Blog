const Sequelize = require('sequelize')
const connection = require('../database/database')

const User = connection.define('users', {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },password: {                   //ENDEREÇO DA CATEGORIA EX: SE UMA CATEGORIA TEM O TITULO DESENVOLVIMENTO WEB E VAI SER DESENVOLVIMENTO-WEB
        type: Sequelize.STRING,
        allowNull: false
    }
})



module.exports = User