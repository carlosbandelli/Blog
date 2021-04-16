const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','root','cskh9492',{
    host:'localhost',
    dialect:'mysql',
    timezone: "-03:00"
});

module.exports = connection;