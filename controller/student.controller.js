const stud=require('./../schema/student.schema');
const parent=require('./../schema/parent.schema');

exports.getParentId = (body,done) => {
    parent.find({where:{parent_name:body.parent_name,parent_mno:body.parent_mno}}).then((user) => {
        if(user){
            done(null,user)
        }
        else
            done("no data found")
    })
};
exports.insert =(body,done)=>{
    parent.create(body).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
};

exports.post1=(body,id,done)=>{
    body.parent_id=id;
    stud.create(body).then((d)=>{
        done(null,d);
    }).catch((err)=>{
        done(err);
    })
};