//fundamentals of javascript and arrays 

var arr = [1,2,3,4];
// need to know in : array foreach map filter find indexOF  

arr.forEach(function(val){
    console.log(val + "helo");
}) //for every array function , adding hello string 

//mapping function for array ; making one more array in comparison of previous array 

var newarr = arr.map(function(val){
    return val*3 ;
})

console.log(newarr);

//filter functon for array : filter out the element from array using conditions

//Printing all the elements that are greater than 3

var ans = arr.filter(function (val){
    if (val>3) {return true;}
        else return false;
})

console.log(ans);

//find function

var answer = arr.find(function(val){
    if(val===2) return val;
})

console.log(answer);

//index off function : finding the elements on the basis of its indexing 

let x = arr.indexOf(12);
console.log(x);

let y = arr.indexOf(1);
console.log(y);

//Fundamentals of objects in javascript

//Key value pairs 

var obj = {
    name : "shivangi" , 
    age : 26 
}

Object.freeze(obj); //Freezing the object value , so that value will be immutable
var names = obj['name']; //acessing name from array
const X = obj.age = 25; //changing the age of object
console.log(obj ,names,X);

// Funcrions return 

function abcd(){
    return 12;
}

var ans = abcd();
console.log(ans);

//Async of JAVASCRIPT coding 

// Line by Line code will run ; called as synchronous
// the code that is of async nature will be sent in side stack and the code that is sync in nature that will be run and after the main stack (sync code is completed ) then move the side stack code to main stack and then run it 

async function abcde (){
    var blob = await fetch(`https://randomuser.me/api/`)
    var acc = blob.json();
    console.log(acc);
}

abcde();