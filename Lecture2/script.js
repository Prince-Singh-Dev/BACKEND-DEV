//Node.js Basics 
//Introduction to Node.js
//Installing Node.js and npm
//working with node and npm 
//npm init 
//node baisc usage
//Working with modules
//file system operation
//Understanding HTTP module 

//                                               Node.js Basics and Introduction 

//                                                        Story Time

// Javascript cannot make the backend because it doesn't consist of backend functionalities 
// Ryan dahl think of making a proper backend using JS 
// After thinking alot , rayn dehl got the open scource code of V8 engine and now he is doing some modifictaion in it 
// As chrome V8 engine is made in C++
// Then he think that , we have to code in JS 
// rayn place a wrapper of JS code over the C++ code of V8 engine 
// inshort , we will write the code in js and that code will taken by someone and given to JS Wrapper and that will convert it and pass to v8 engine

// Nodejs is a js runtime environment 

// npm init -> created package.json --> Details about the project

const fs = require('node:fs');  //node fs module is transfered to fs constant 

//we have to read write file , append file , copy file , rename , unlink installed in fs 

//write file : 
// syntax : fs.writeFile(file, data[, options], callback)

fs.writeFile("hey.txt","Love to Shivangi Joshi", function(err){
    if(err) console.error(err);
    else console.log("done");
});

//to run any file using node : node script.js
