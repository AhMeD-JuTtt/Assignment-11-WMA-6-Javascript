// 14. Write a JavaScript function to retrieve all the values of an object's properties.

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

let values = Object.values(obj);
console.log("All the values in object are")
for (let index = 0; index < values.length; index++) {
    console.log(values[index]);
}