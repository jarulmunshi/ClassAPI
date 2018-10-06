var Sequelize = require('sequelize');
const {db} = require('../config/database');
const user=db.define('tbl_user',{
    user_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false

    },
    user_role:{
        type:Sequelize.STRING,
        allowNull:false
    },
    mobile_no:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false

    },
    state_temp:{
        type:Sequelize.INTEGER,
        allowNull:false

    }
});

user.sync({force:false}).then((res)=>{
    console.log("user table created");
}).catch((err)=>{
    console.log(err);
});

module.exports = user;
