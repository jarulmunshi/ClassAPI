var Sequelize = require('sequelize');
exports.db=new Sequelize('DBSchool','root','',{
    port:3306,
    host:'localhost',
    dialect:'mysql'
})