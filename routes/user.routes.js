const router=require('express');
const route=router();
const {insert,post1,getAll} = require('../controller/user.controller');
route.post('/',(req,res)=>{
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
            //res.setHeader(token,result.token);
            res.json(result);
            //console.log(result.token);
        }
    })
});
route.post('/login',(req,res)=>{
    post1(req.body,(err,result)=>{
        if (err){
            res.statusCode=400;
            res.json(err);
            console.log(err);
        }
        else if(result == null){
            res.statusCode=404;
            res.json({msg:"NOT VALID"});

        }
        else {
            res.statusCode=200;
            //res.setHeader(token,result.token);
            res.json(result);
            console.log(result);
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
            console.log(result);
            res.json({msg:"NOT VALID"});

        }
        else {
            res.statusCode = 200;
            //console.log("========");
            console.log(result);
            res.json(result);
        }
    })
});
module.exports=route;