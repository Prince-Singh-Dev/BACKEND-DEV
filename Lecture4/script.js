// Express.js Framework


// Introduction to Express


// MERN Stack --> MongoDB , Express.js , React.js , Node.js 
// Express.js is a npm package , It is an framework 
// Framework --> when any technology says , how to do to work { Framework generally give the flow of work execution } 
// It manages everything from receving the request to giving back the response 
// For example : sending request to Youtube to start a video , then request is processed and given a response in the form of video
// Error Handling 


// Setting up a basic Express application


const express = require('express') //requring express package and complete functionality of express is transfered to express variables
const app1 = express()  // complete express power tranfered to app

app1.get('/', function (req, res) { 
  res.send('Hello World')
})

app1.listen(3000)


// Routing : Creating different Routes { youtube.com/hello --> here hello is the route }


const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send("Love you Shivangi");
})

app.get("/profile",function(req,res){
    res.send("Love you 2");
})

app.listen(3000);


// Middleware : The request that we send to facebook for photo , first it would given to middleware than after that request move to routes and response 
// Whenever server accept the request , from their to reaching to the route , if we stop the request in mid and we do something , then this element is known as Middleware
// for example : we send a request to youtube to download a video then using the middleware we can print hello in mid of request then request can be pass on to the route and response will be generated in terms of downloading video 
