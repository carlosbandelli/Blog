const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {                   //ENDEREÇO DA CATEGORIA EX: SE UMA CATEGORIA TEM O TITULO DESENVOLVIMENTO WEB E VAI SER DESENVOLVIMENTO-WEB
        type: Sequelize.STRING,
        allowNull: false
    }
})



module.exports = Category