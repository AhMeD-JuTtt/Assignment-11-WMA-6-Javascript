// 9. Write a JavaScript program to calculate the area and perimeter of a circle.   

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

let circle = {

    pi: 3.1415,
    area: function(radius) {
        return this.pi * radius ** 2;
    },
    perimeter: function(radius) {
        return 2 * this.pi * radius;
    }
}

console.log("Area of Circle is", circle.area(20).toFixed(4))
console.log("Perimeter of Circle is", circle.perimeter(20).toFixed(4))