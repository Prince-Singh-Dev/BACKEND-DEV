//MongoDB installation
//MongoDB connection
//Create , read , update and delete commands using MongoDB and Node server communication


// Step 1 : npm init -y : for package json file , changing script.js to app.js
// Start with Writing on terminal : npm i express : to install node server and packages 
// npm i mongoose : Which will help us to communicate with MongoDB server using node server { Basically its an ODM }
// ODM : Object Document Mapping 
// ORM : Object Relational Mapping

const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/',(req,res) => {
    res.send("hey");
})

app.get('/create', async (req,res) => { //Creating a user data
    let createduser = await userModel.create({         
        name : "ShivangiJoshi",
        email : "ShivangiJoshi@gmail.com",
        username : "Ishq_Shivangi"
    }) //Every Mongoose code is an Asyncheonous code .... thus , we will use async in our function and await in our code ... so that it will run in prior

    res.send(createduser);  //Output on Console for this code , once you will search /create 
    //{
    //  "name": "ShivangiJoshi",
    //  "username": "Ishq_Shivangi",
    //  "email": "ShivangiJoshi@gmail.com",
    //  "_id": "681f05d4f323cbc28aa3e910",  this id contain machine info , network info and timestamp at which the user has been created 
    //  "__v": 0
    //}
})

app.get('/update', async (req,res) => { //findone : which thing to update , update : Updated data , new true : to confirm to run
    let upadateduser = await userModel.findOneAndUpdate({username :"Ishq_Shivangi"},{username : "Shivangi_Ishq"},{new:true}) 
    res.send(upadateduser);
    //Ouput : {"_id":"681f05d4f323cbc28aa3e910","name":"ShivangiJoshi","username":"Shivangi_Ishq","email":"ShivangiJoshi@gmail.com","__v":0}
})

app.get("/read",async (req,res) => {  //Reading the data
    let users = await userModel.find(); //Currently reading everything , if we want to read some specific then : passing the username in find bracket as parameters
    res.send(users); //Searching localhost:3000/read : giving an output as the user details
    //Find always gives as a array if no data found then empty array and findone gives an object if not any data then null
})

app.get("/delete", async (req,res) => { //deleting any data 
    let deletion = await userModel.findOneAndDelete({username : "Shiavngi"});
    res.send(deletion);
})

app.listen(3000);