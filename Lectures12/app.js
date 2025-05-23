// Data AssociatioN / MongoDB

const express = require('express');
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/",function(req,res){
    res.send("hey");
})

app.get("/create",async function(req,res){
    let user = await userModel.create({
        username : "Prince",
        age : 19 , 
        email : "Angrysoul6173@gmail.com"
    });

    res.send(user)
})

app.get("/post/create",async function(req,res){
    let post = await postModel.create({
        postdata : "hello saare log kaise ho",
        user : "682fd802ce9c82554a364e00"
    })
    let user = await userModel.findOne({_id:"682fd802ce9c82554a364e00"});
    user.posts.push(post._id);
    await user.save();

    res.send({post,user});
})

app.listen(3000);

//  temp change to trigger git
