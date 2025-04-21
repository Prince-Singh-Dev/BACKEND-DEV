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
const path = require('path'); // <-- Add this
const app = express();
app.use(express.json());
app.use(express.urlencoded({Extended : true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

//Dynamic Routing : We saw alot of routes in our life , in those routs only one thing is changed .. for example 
// /author/harsh
// /author/harshita
// /author/Prince
// /author/Shivangi
// here one thing is common i.e. author and one thing is different i.e. harsh,harshita,Prince,Shivangi

// app.get("/profile/:username",function(req,res){            //Created my own url named as localhost:3000/profile/shivangi
//     res.send("Love from Prince to SHIVANGI JOSHI 3000");
//     //finding which value is coming despite on the place of username
//     res.send(req.params.username);
// });

//Handling the username from backend , printing it on frontend and sending some message over frontend also ...

app.get("/profile/:username",function(req,res){
    res.send(`Love you 3000 , ${req.params.username}`);
});

// Now to make it dynamic URL ... Now realise which part is dynamic and after realising , include colon : in that route , i.e
// localhost:3000/profile/shivangi  .. here shivangi is dynamic so add colon before it 

app.listen(3000,function(){
    console.log("I love Shivangi Joshi");
})

