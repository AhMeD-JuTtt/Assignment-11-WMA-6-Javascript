// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

let obj = {
    fname: "Muhammad",
    lname: "Ahmed",
    rollno: 4504,
    displayInfo: function(a) {
        if (a == 1) {
            console.log(`${this.fname} ${this.lname} is a BS Software Engineer and his Roll No. is ${this.rollno}.`)
        } else {
            console.log("Wrong Input.")
        }
    }
}
let allValues = [];
for (const key in obj) {
    let keyValuePairs = [];
    keyValuePairs.push(key, obj[key])
    allValues.push(keyValuePairs)
}
console.log("[key, value] pairs of Object:")
console.log(allValues)