// // Node.js Basics 
// // Introduction to Node.js --> Installing Node.js and npm
// // working with node and npm --> npm init 
// // Node baisc usage --> Working with modules --> file system operation
// // Understanding HTTP module 

// //                                                              Node.js Basics and Introduction 

// //                                                                        Story Time


// // Javascript cannot make the backend because it doesn't consist of backend functionalities 
// // Ryan dahl think of making a proper backend using JS 
// // After thinking alot , rayn dehl got the open scource code of V8 engine and now he is doing some modifictaion in it 
// // As chrome V8 engine is made in C++
// // Then he think that , we have to code in JS 
// // rayn place a wrapper of JS code over the C++ code of V8 engine 
// // inshort , we will write the code in js and that code will taken by someone and given to JS Wrapper and that will convert it and pass to v8 engine

// // Nodejs is a js runtime environment 
// // npm init -> created package.json --> Details about the project


// //                                                             Node Basic Usage and File Handling 


// const fs = require('node:fs');  //node fs module is transfered to fs constant 

// // we have to read write file , append file , copy file , rename , unlink , rmdir installed in fs 

// // write file : 
// // syntax : fs.writeFile(file, data[, options], callback)

// fs.writeFile("hey.txt","Love to Shivangi Joshi", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });

// // to run any file using node : node script.js

// // append file : 
// // syntax : fs.appendFile(file, data[, options], callback)

// fs.appendFile("hey.txt","  You are the Best", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });

// // Rename file :
// // Synatx : fs.rename(oldPath,newPath,callback)

// fs.rename("hey.txt","Hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// });

// // Copy file 
// // Syntax : fs.copyfile(src,dest [,mode],callback)

// fs.copyFile("Hello.txt","./copy/copy.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// });

// // Unlink file 
// // Synatx : fs.unlink(path , callback)

// fs.unlink("Hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// // Removing directory 
// // Syntax : fs.rmdir(path[,options],callback)

// fs.rmdir("./copy.txt",{recursive : true},function(err){
//     if(err) console.error(err.message);
//     else console.log("removed");
// });


// //                                                                Understanding HTTP Modules


// // HTTP -- Hyper Text Transfer Protocol 
// // Protocol -- set of rules 
// // to access internet , some rules are created by the former of internet and it is manadatory to follow those rules 
// // to make sure that the rules are being followed , the rules are pre-installed in our operating systems 
// // inshort without using these rules , you can't perform any request and any function on internet


// // creating a HTTP server using Node JS docs 

const http = require('http');

// // Syntax : http.createServer([options][, requestListener])

const server = http.createServer(function(req , res){
    res.end("hello world");
})

server.listen(3000);
