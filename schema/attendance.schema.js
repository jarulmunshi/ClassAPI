var Sequelize = require('sequelize');
var {db} = require('../config/database');
var student = require('../schema/student.schema');
const attendance = db.define('tbl_attendance',{
        attendance_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        studentid:{
            type:Sequelize.INTEGER
        },
        status:{
            type:Sequelize.BOOLEAN
        },
        date:{
            type:Sequelize.DATE
        },
        state_temp:{
            type:Sequelize.INTEGER,
            defaultValue:0
        }
    }
);

attendance.sync({force:false}).then((res)=>{
    console.log("Attendance Table Created");
}).catch((err)=>{var Sequelize = require('sequelize');
    var {db} = require('../config/database');
    const attendance = db.define('tbl_attendance',{
            attendance_id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            studentid:{
                type:Sequelize.INTEGER
            },
            status:{
                type:Sequelize.INTEGER
            },
            date:{
                type:Sequelize.DATE
            },
            state_temp:{
                type:Sequelize.INTEGER,
                defaultValue:0
            }
        }
    );

    attendance.sync({force:false}).then((res)=>{
        console.log("Attendance Table Created");
    }).catch((err)=>{
        console.log(err);
    });

    module.exports = attendance;
    console.log(err);
});

module.exports = attendance;