var Sequelize = require('sequelize');
var {db} = require('../config/database');
var parent = require('../schema/parent.schema');
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
        parentid:{
            type:Sequelize.INTEGER,
        },
        state_temp:{
            type:Sequelize.INTEGER,
            defaultValue:0
        }
    }
);

stud.belongsTo(parent,{foreignKey:'parent_id'});
stud.sync({force:false}).then((res)=>{
    console.log("Stud Table Created");
}).catch((err)=>{
    console.log(err);
});

module.exports = stud;