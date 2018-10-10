const user=require('./../schema/user.schema')
const {db} = require('../config/database');
const Sequelize = require('sequelize');
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
        //console.log(user);
        if(user){
            // console.log("Users data"+ user);
            // console.log("=================");
            done(null,user)
        }
        else
            done("no data found")
    })
};