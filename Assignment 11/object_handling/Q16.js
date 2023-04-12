// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.


let obj1 = {
    fname: "Muhammad",
    lname: "Ahmed",
    rollno: 4504,
}
let obj2 = {}

// Before making a copy:
console.log("Before switching keys and values:")
console.log(obj1)

function switchKeysValues(o) {
    let copy = {}
    for (const key in o) {
        copy[o[key]] = key;
    }
    return copy
}

// After making a copy:
console.log("\nAfter switching keys and values:")
console.log(switchKeysValues(obj1))