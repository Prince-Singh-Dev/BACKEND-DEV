const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = mongoose.Schema({ //Mongoose Schema is an method that require an object ... Schema is basically what the identity an user will hold 
    name : String,
    username : String,
    email:String
}) 

module.exports = mongoose.model("user",userSchema); // Model is basically benificial to edit , update , make changes , read , manipulate the user data
//exports is a property that will export the model , on that basis we can create , read , update and delete 