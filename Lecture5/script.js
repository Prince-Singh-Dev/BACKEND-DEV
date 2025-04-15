//FORM HANDLING , SESSIONS AND COOKIES
//Handle Backend process of forms and making sure the data coming from any frontend lib , fw , templating engines , we still handle it at the backend 

const express = require('express');
const app = express();

//We have a google form , filling emal , and name , data and after clicking on submit , it goes on the server in blob (unreadable stream , hexadecimal in short) mode

// you have sent a plan text but server got a blob so to handle this and making it in readable form , we use these two lines 
app.use(express.json()); //using a middle ware
app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("Love you shivangi joshi");
});

app.get("/about",function(req,res){
    res.send("I love you shivangi");
});

//Session - Cookie 
//We can store any data on the browser and whenever we do a request for any data in backend then the data that saved on frontend will move to the backend 
//Cookie : saved data on browser used in authentication purpose mainly ..