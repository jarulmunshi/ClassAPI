const user=require('./../schema/user.schema');
const {db} = require('../config/database');
exports.insert =(body,done)=>{
    user.create(body).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
};
exports.post1 = (body,done) =>{
    user.find({where:{email:body.email,password:body.password}}).then((d)=>{
            done(null,d);
    }).catch(err=>{
        done(err);
    })
};
exports.getAll = (done) => {
    console.log("HI");
    user.findAll().then((user) => {
        if(user){
            done(null,user)
        }
        else
            done("no data found")
    })
};
exports.up = (id,body,path,done) =>{
    body.profile_pic=path;
    user.update(body,{where:{user_id:id}}).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    });
};