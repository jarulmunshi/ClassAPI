const attendance=require('./../schema/attendance.schema');
const {db} = require('../config/database');
const sequelize = require('sequelize');

const date = new Date();
const todayDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
exports.insert =(body,done)=>{
    console.log(body);
    // attendance.find({
    //     where:{
    //         $and: [
    //             sequelize.where(sequelize.fn('date', sequelize.col('date')), '=', todayDate),
    //             { studentid: body.studentid }
    //         ]
    //     }
    // }).then((updateAttendence) => {
    //     if(updateAttendence){
    //         attendance.update(body, {
    //             where:{
    //                 studentid: body.studentid
    //             }
    //         }).then((updatedAttendence) => {
    //             if(updatedAttendence){
    //                 attendance.find({
    //                     where: {
    //                         studentid: body.studentid
    //                     }
    //                 }).then((attendenceData) => {
    //                     done(null, attendenceData)
    //                 }).catch((err) => {
    //                     done(err)
    //                 })
    //             }else {
    //                 done("Problem updating attendence")
    //             }
    //         }).catch((err) => {
    //             done(err)
    //         })
    //     }else {
    //         attendance.create(body).
    //         then((newAttendenceRecord) => {
    //             done(null, newAttendenceRecord)
    //         }).
    //         catch((err) => {
    //             done(err)
    //         })
    //     }
    // });
    body.date=Date(body.date);
    attendance.create(body).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
};
exports.getAll = (done) => {
    //const date=CAST(d as date);
    //var d1=d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate();
    db.query(`select * from tbl_attendances`,{type:sequelize.QueryTypes.SELECT}).then((stud) => {
            console.log("=======",typeof(stud));
            //console.log(stud);
            console.log(Object.getOwnPropertyNames(stud).length);
            if(Object.getOwnPropertyNames(stud).length !=1){
                console.log("^^^^",stud);
                done(null,stud);
            }else if(Object.getOwnPropertyNames(stud).length ==1){
                done(null,stud);
            }
            else
                done("no data found")
        });
    //console.log("^^^^^^",d1);
    // attendance.findAll({where:{status:{$eq:0}}}).then((stud) => {
    //     console.log("=======",typeof(stud));
    //     console.log(Object.getOwnPropertyNames(stud).length);
    //     if(Object.getOwnPropertyNames(stud).length ==2){
    //         done(null,stud);
    //     }else if(Object.getOwnPropertyNames(stud).length ==1){
    //         done(null,{msg:"Done"});
    //     }
    //     else
    //         done("no data found")
    // })
};