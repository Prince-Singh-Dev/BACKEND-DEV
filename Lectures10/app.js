// We will Study how to set and read cookies ... Step to start it 
// Step 1 : npm init -y
// Step 2 : npm i jsonwebtoken bcrypt
// Step 3 : npm i express
// Step 4 : npm i cookie-parser
// Step 5 : Changing main file name index.js in Package json to app.js

const cookieParser = require('cookie-parser'); //Cookie function necessary to require while cookie is bieng read 
const express = require('express');
const app = express();
app.use(cookieParser()); //Setting up code to read or access cookie 

app.get("/",function(req,res){
    res.cookie("name","Prince");  //Setting up a cookie 
    res.send("done");
})

app.get("/read",function(req,res){
    console.log(req.cookies);  //Reading the cookie and priting it on the screen 
    res.send("read page");
})

app.listen(3000);

// Bycrypt : how to use it for password encryption and decryption 

// first we will create a salt ( ek random string ) , then converting our password into an mixed strings and characters 
// Password =>  Qbttxpse ( Password is saved as another string using different algorithm ) { In that case will use SHA-256 }
// SHA-256 is a cryptographic hash function that produces a fixed-size 256-bit (32-byte) hash value, commonly used for data integrity and security in various applications.
// Thus after using SHA-256 our password would be changes 
// Password => xhznnubduh0838bfjbis893bfjjskifnbchaniao090m

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

Default code to use to hash a password using bcrypt 
    bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

app.get("/",function(req,res){  //ENCRYPTION 
        bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("Prince_Singh24" , salt, function(err, hash) {
            console.log(hash);
            //Output ; Password Prince_Singh24 changed to : $2b$10$54onS94RvVd9PtzkLgyGze1tX/KBm/I1kdW1CxO5IbQpoOVmf0AFm
        });
    });
})

//Decryption of Password using Bcrypt : 

// Default method of code to use : for Decryption : 

app.get("/",function(req,res){
        bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        // result == true
    });
})

app.get("/",function(req,res){
        bcrypt.compare("Prince_Singh24", "$2b$10$54onS94RvVd9PtzkLgyGze1tX/KBm/I1kdW1CxO5IbQpoOVmf0AFm" , function(err, result) {
        console.log(result); //Output : ture 
    });
})

app.listen(3000);

// Now , we will Understand What is JWT and how to store and fetch data from it 

// JWT is formed of three things : Header , Payload and Signature : Thus Signature consists of the actual user data , that is encrypted in form of JWT 

// JWT string : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

// Header : {
//   "alg": "HS256",
//   "typ": "JWT"
// } 

// Payload : {
//   "sub": "1234567890",
//   "name": "John Doe",
//   "iat": 1516239022
// }

// Verify Signature : HMACSHA256(
//   base64UrlEncode(header) + "." +
//   base64UrlEncode(payload),
//   your-256-bit-secret
// )

// Code for JWT :

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.get("/",function(req,res){
    let token = jwt.sign({email : "ShiavngiJoshi@gamil.com"},"secret"); //Storing the ID and Password over JWT in encrypted from , Here secret is the methadology of encrypting that data and email is the data
    res.cookie("token",token);
    res.send("done");
    console.log(token);

    // finding data from the token : 
    // let data = jwt.verify(req.cookies.token , "secret");
    // console.log(data);
})

app.listen(3000);