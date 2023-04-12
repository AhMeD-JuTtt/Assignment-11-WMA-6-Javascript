// 10. Write a JavaScript program to sort an array of JavaScript objects.   

// Sample Object :



// var library = [ 

//    {

//        title:  'The Road Ahead',

//        author: 'Bill Gates',

//        libraryID: 1254

//    },

//    {

//        title: 'Walter Isaacson',

//        author: 'Steve Jobs',

//        libraryID: 4264

//    },

//    {

//        title: 'Mockingjay: The Final Book of The Hunger Games',

//        author: 'Suzanne Collins',

//        libraryID: 3245

//    }];

// Expected Output:



// [[object Object] {

//   author: "Walter Isaacson",

//   libraryID: 4264,

//   title: "Steve Jobs"

// }, [object Object] {

//   author: "Suzanne Collins",

//   libraryID: 3245,

//   title: "Mockingjay: The Final Book of The Hunger Games"

// }, [object Object] {

//   author: "The Road Ahead",

//   libraryID: 1254,

//   title: "Bill Gates"

// }]


function sorter(a) {
    for (let index = 0; index < a.length; index++) {
        for (let i = 0; i < a.length; i++) {
            if (i < 2) {
                if (a[i].libraryID < a[i + 1].libraryID) {
                    temp = a[i + 1];
                    a[i + 1] = a[i];
                    a[i] = temp
                }
            }
        }
    }
    console.log(a);
}

var library = [

    {

        title: 'The Road Ahead',

        author: 'Bill Gates',

        libraryID: 1254

    },

    {

        title: 'Walter Isaacson',

        author: 'Steve Jobs',

        libraryID: 4264

    },

    {

        title: 'Mockingjay: The Final Book of The Hunger Games',

        author: 'Suzanne Collins',

        libraryID: 3245

    }
];


console.log("Before Sorting:")
console.log(library)
console.log("After Sorting:")
sorter(library)