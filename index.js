const express=require('express');
const app=express();
const db=require('./config/database');
const userRoute = require('./routes/user.routes');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/user',userRoute);

app.listen(3000,(err)=> {
    if(err){
        console.log(err);
    }
    console.log("server connected");
});










