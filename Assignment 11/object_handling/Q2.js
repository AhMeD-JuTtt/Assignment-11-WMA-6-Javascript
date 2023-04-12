// 2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property.

// Sample object:

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };


var student = {

    name: "David Rayy",

    sclass: "VI",

    rollno: 12
};

// Before deleting:

console.log("Before Deleting the property:\n", student)

delete student.rollno;

// After deleting:

console.log("After Deleting the property:\n", student)