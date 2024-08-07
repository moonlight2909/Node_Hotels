const notes = require("./notes.js");
console.log ("this is a server file");

var _ = require("lodash");


var data = ["person","person",1,2,3,4,6,"name",2,3,5,"age"]
var filter = _.uniq(data);
console.log(filter)


console.log(_.isString(true));
// console.log("server file is running");
// function add(a,b){
//     return a+b;
// }
// var result = add(6,7);
// console.log(result);


// function callback(){
//     console.log("Himanshu is calling a callback function");

// }
// const add = function(a,b,him){
//     var result = a+b;
//     console.log("result :"+ result);
//     him();
// }
// // add(3,4,function(){
// //     console.log("add complete");
// // });
// add (2,3,()=> console.log("add complete"));

// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user);

// // create a file

// fs.appendFile("greeting.txt","Hi"+user.username +"!\n",()=>{
//     console.log("file is created");
// })

// console.log(os);
// console.log(fs);

