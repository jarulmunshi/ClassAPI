var express=require('express');
var app=express();
var bodyparser = require('body-parser');

const db =require('./config/database');
const userSchema=require('./schema/user.schema');
const studentSchema=require('./schema/student.schema');
const attendanceSchema=require('./schema/attendance.schema');
const fileSchema=require('./schema/file.schema');
//const userRoute=require('./routes/user.routes');
//const multer = require('multer');
app.use(bodyparser.json());
//app.use(bodyparser())
app.use(bodyparser.urlencoded({extended: false}));




app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("server connected");
})