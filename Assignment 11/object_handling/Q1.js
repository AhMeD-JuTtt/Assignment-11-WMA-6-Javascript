// 1. Write a JavaScript program to list the properties of a JavaScript object

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };

// Sample Output: name,sclass,rollno




var student = {

    name: "David Rayy",
    sclass: "VI",
    rollno: 12

};

let prop = Object.keys(student);
result = "";
for (let index = 0; index < prop.length; index++) {
    if (result == "") {
        result += prop[index];
    } else {
        result += `, ${prop[index]}`
    }
}
console.log(result)