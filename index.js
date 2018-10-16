const express=require('express');
const app=express();
const db=require('./config/database');
const userRoute = require('./routes/user.routes');
const studRoute = require('./routes/student.route');
const bodyparser = require('body-parser');
const path=require('path');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/user',userRoute);
app.use('/stud',studRoute);
app.set('port',process.env.PORT || 3000);
app.use(express.static(path.join(__dirname,'uploads')));
app.listen(3000,(err)=> {
    if(err){
        console.log(err);
    }
    console.log("server connected");
});










