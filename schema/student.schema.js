var Sequelize = require('sequelize');
var {db} = require('../config/database');
const stud = db.define('tbl_student',{
        student_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        student_name:{
            type:Sequelize.STRING
        },
        Gender:{
            type:Sequelize.BOOLEAN
        },
        dob:{
            type:Sequelize.DATE
        },
        parent_name:{
            type:Sequelize.STRING
        },
        parent_mno:{
            type:Sequelize.STRING
        },
        state_temp:{
            type:Sequelize.INTEGER,
            defaultValue:0
        }
    }
)


stud.sync({force:false}).then((res)=>{
    console.log("Stud Table Created");
}).catch((err)=>{
    console.log(err);
})

module.exports = stud;