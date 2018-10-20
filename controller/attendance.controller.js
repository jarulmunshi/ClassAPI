const attendance=require('./../schema/attendance.schema');
const {db} = require('../config/database');
exports.insert =(body,done)=>{
    body.date=Date(body.date);
    attendance.create(body).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
};
exports.getAll = (done) => {
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