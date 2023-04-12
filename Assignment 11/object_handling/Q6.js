// 6. Write a Bubble Sort algorithm in JavaScript.   

// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,

// Sample Data: [6,4,0, 3,-2,1]

// Expected Output : [-2, 0, 1, 3, 4, 6]

let data = [6, 4, 0, 3, -2, 1];

// Before Sorting:
console.log("Before Sorting the array\n", data)

for (let index = 0; index < data.length; index++) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > data[i + 1]) {
            temp = data[i + 1];
            data[i + 1] = data[i];
            data[i] = temp
        }
    }
}
// After Sorting:
console.log("After Sorting the array\n", data)