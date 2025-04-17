//Soft Mini Project : A webPage to stores My notes using Backend 
//Initializing a Project with npm 
//installing express

//To learn in Lecture : 
//Setting up parsers for form
//setting up ejs for ejs pages
//setting up public statis files
//dynamic routing
//How to get data coming from frontend at backend route

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({Extended : true}));
// app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("index.ejs");
});

app.listen(3000,function(){
    console.log("I love Shivangi Joshi");
})