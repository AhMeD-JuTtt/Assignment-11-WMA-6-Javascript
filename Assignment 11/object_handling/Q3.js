// 3. Write a JavaScript program to get the length of a JavaScript object.   

// Sample object :

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };



var student = {

    name: "David Rayy",

    sclass: "VI",

    rollno: 12
};

let len = Object.keys(student).length;
console.log(`The length of the object is ${len}`)