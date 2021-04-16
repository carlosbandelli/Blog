const Sequelize = require('sequelize')
const Category = require('../categories/Category')
const connection = require('../database/database')

const Article = connection.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {                   //ENDEREÇO DA CATEGORIA EX: SE UMA CATEGORIA TEM O TITULO DESENVOLVIMENTO WEB E VAI SER DESENVOLVIMENTO-WEB
        type: Sequelize.STRING,
        allowNull: false
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})
Category.hasMany(Article)
Article.belongsTo(Category)



module.exports = Article