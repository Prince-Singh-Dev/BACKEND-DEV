//                                                               MongoDB , Mongoose and DataBase Management

// Data Storage :
// Place where we can store a lot of data of users

// Types of DBS - SQL | NoSQL

// SQL - Sequal , storing the data in form of tables 

// NoSQL - the data is stored in JS form ... for example :
// {
//    name : "Prince" , 
//    age : 18
// }

// We will Study MongoDB database that is part of NoSQL 

//  What :
//  MongoDB - NoSQL based database which stores data in form of objects 

// Terminologies - collections , documents , schemas , keys , models 

// In backend , there are two servers : 1. Application Server (Node) and 2. DataBase Server (MongoDB)

//Application Server that Handle the routes and accept the request (For example : Login / Logout / Serching any thing on Web like facebook.com/profile)
//DataBase Server that holds the valuable data , whenever the AS needs anything from database server , a request will be generated and sent to DS and after getting the response the AS will continue its working ...

// Application Server -------------------> DataBase Server 
//         '                                    |
//        / \                                  \ /
//         |                                    '
//         --------------------------------------

// Now we need to focus on DataBase Server :
// Suppose a huge database containing different companies data like Amazon , Flipkart , Microsoft and Facebook

// In those data's .. Let suppose , company Amazon contain different data sets of Customers name , age , preference , order details , address etc.
// So These all model sets together / Collectively called as a Collections ( for e.g. : customer collection , age collection etc.)
// this concept is applied on all data sets 

// Now there is a collection of user in Amazon , and in those if we found any specific data of user then it is known as DOCUMENT

// DATABASE --> COLLECTIONS --> DOCUMENT

// now on the base of code level , what we do :
// When we connect mongoose with code then it will create a DataBase 
// When we create a model then collection is created 
// when we "CREATE" then Document is created 

// --------------------------------------------------------------
// | CODE                          |            DATABASE        |
// --------------------------------|-----------------------------
// | mongoose.connect              |        Database Created    |
// | model Create                  |        Collections         |
// | CREATE code                   |        Document            |
// --------------------------------------------------------------

