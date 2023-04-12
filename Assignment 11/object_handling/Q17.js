// 17. Write a JavaScript function to check whether an object contains given property.

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

function propCheck(prop) {
    prop in obj ? console.log(`Yes, ${prop} exists in the Object.`) : console.log(`No, ${prop} does not exist in Object.`)
}

propCheck("rollno")
propCheck("fname")
propCheck("graduation")