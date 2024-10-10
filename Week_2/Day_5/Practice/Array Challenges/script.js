// Always Hungry

function alwaysHungry(arr) {
    let foundFood = false;
    for (let item of arr) {
        if (item === "food") {
            console.log("yummy");
            foundFood = true;
        }
    }
    if (!foundFood) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]); // "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]); // "I'm hungry"


// High Pass Filter

function highPass(arr, cutoff) {
    let filteredArr = [];
    for (let num of arr) {
        if (num > cutoff) {
            filteredArr.push(num);
        }
    }
    return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // [6, 8, 10, 9]

// Better than Average

function betterThanAverage(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    let average = sum / arr.length;
    let count = 0;
    for (let num of arr) {
        if (num > average) {
            count++;
        }
    }
    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

// Array Reverse

function reverse(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // ["e", "d", "c", "b", "a"]

// Fibonacci Array

function fibonacciArray(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    let fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

