var Sequelize = require('sequelize');
exports.db=new Sequelize('SchoolDatabase','root','',{
    port:3306,
    host:'localhost',
    dialect:'mysql'
});