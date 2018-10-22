const attendance=require('./../schema/attendance.schema');
const {db} = require('../config/database');
var d=new Date();
exports.insert =(body,done)=>{
    body.date=Date(body.date);
    attendance.create(body).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
};
exports.getAll = (done) => {
    //const date=CAST(d as date);
    //db.query(`select * from tbl_attendances where DATE(date)=${DATE(d)} and status = 0`,{type:Sequelize.QueryTypes.SELECT})
    attendance.findAll({where:{status:{$eq:0}}}).then((stud) => {
        console.log("=======",typeof(stud));
        console.log(Object.getOwnPropertyNames(stud).length);
        if(Object.getOwnPropertyNames(stud).length ==2){
            done(null,stud);
        }else if(Object.getOwnPropertyNames(stud).length ==1){
            done(null,{msg:"Done"});
        }
        else
            done("no data found")
    })
};