var Sequelize = require('sequelize');
var {db} = require('../config/database');
var user = require('../schema/user.schema');
const file = db.define('tbl_file',{
        file_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        file_name:{
            type:Sequelize.STRING
        },
        file_type:{
            type:Sequelize.STRING
        },
        file:{
            type:Sequelize.STRING
        },
        file_description:{
            type:Sequelize.STRING
        },
        userid:{
            type:Sequelize.INTEGER
        },
        state_temp:{
            type:Sequelize.INTEGER,
            defaultValue:0
        }
    }
);
file.belongsTo(user,{foreignKey:'user_id'});
file.sync({force:false}).then((res)=>{
    console.log("file Table Created");
}).catch((err)=>{
    console.log(err);
});

module.exports = file;