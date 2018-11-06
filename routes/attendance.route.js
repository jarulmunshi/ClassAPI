const router=require('express');
const route=router();
const {insert,getAll} = require('../controller/attendance.controller');

route.post('/',(req,res)=>{
    //console.log("attendance body",req.body);
    insert(req.body,(err,result)=>{
        //console.log(req.body)
        if (err){
            res.statusCode=400;
            res.json(err);
            console.log(err);
        }
        else if(result == null){
            res.statusCode=404;
            res.json({msg:"NOT VALID"});
            console.log("Not Valid");
        }
        else {
            res.statusCode=200;
            res.json(result);
            //console.log(result.token);
        }
    })
});
route.get('/',(req,res)=> {
    getAll((err, result) => {
        if (err) {
            res.statusCode = 400;
            res.json(err);
        }
        else if(result == null){
            res.statusCode=404;
            res.json({msg:"NOT VALID"});

        }
        else {
            res.statusCode = 200;
            res.json(result);
        }
    })
});

module.exports=route;