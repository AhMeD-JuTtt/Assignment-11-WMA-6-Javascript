// 7. Write a JavaScript program which returns a subset of a string.   

// Sample Data: dog

// Expected Output: ["d", "do", "dog", "o", "og", "g"]

str = "dog";
subSets = [];

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
        subSets.push(str.slice(i, j));
    }
}
console.log(subSets)