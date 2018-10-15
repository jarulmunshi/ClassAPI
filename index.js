const express=require('express');
const app=express();
const db=require('./config/database');
const userRoute = require('./routes/user.routes');
const studRoute = require('./routes/student.route');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/user',userRoute);
app.use('/stud',studRoute);

app.get('/fileupload', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000,(err)=> {
    if(err){
        console.log(err);
    }
    console.log("server connected");
});










