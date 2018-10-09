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