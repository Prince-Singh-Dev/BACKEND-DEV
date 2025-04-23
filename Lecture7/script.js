// Revising complete Key concepts that we have done till now in Back-End series

// to create a package json file : terminal { npm init -y }
// includes main file : index.js
// installing express and nodemon pacakage : npm i express

// const express = require('express');
// const app = express();
// const path = require('path');

// app.set("view engine","ejs");
// app.use(express.json());
// app.use(express.urlencoded({extended : true }));
// app.use(express.static(path.join(__dirname,"public")));

// app.get('/',function(req,res){
// app.send("welcome");
// })
// app.listen(3000);

// to install nodemon for running live server : in terminal : npm i -g nodemon
// to run live server : npx nodemon {file name}]
// to check whether the server is working or not , going on browser and searching for localhost:3000

// for applying indexpage then we should remove send command to render command : 
// app.send("welcome"); ----> app.render("index");