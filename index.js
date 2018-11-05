const express=require('express');
const app=express();
const db=require('./config/database');
const userRoute = require('./routes/user.routes');
const studRoute = require('./routes/student.route');
const fileRoute = require('./routes/file.route');
//const StudentRoute = require('./routes/student.route');
const attendanceRoute = require('./routes/attendance.route');

const bodyparser = require('body-parser');
const path=require('path');
var d=new Date();
console.log("dvghzd",d.getDate());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/user',userRoute);
app.use('/stud',studRoute);
app.use('/file',fileRoute);
app.get('/test',function(req,res){
    res.json("dfsdf")
});

app.use('/attendance',attendanceRoute);
//app.set('port',process.env.PORT || 3300);
//app.set('host', process.env.HOST || '157.119.207.186');
app.use(express.static(path.join(__dirname,'uploads')));
app.use(express.static(path.join(__dirname,'fileUploads')));
app.listen(3300, (err)=> {
    if(err){
        console.log(err);
    }
    console.log("server connected");
});











