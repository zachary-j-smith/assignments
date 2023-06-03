// 1. 
var arr1 = [6, 13, 250, 3]
var arr2 = [3, 5, 2, 8, 1]
var arr3 = [-13, 40, 3, 0, 19, 22]
var oldArr = [5, 2, 10, 0]

var highestNumber = function(arr) {
    let high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (high < arr[i]) {
            high = arr[i]
        }
    }
    console.log(high)
}

highestNumber(arr1)
highestNumber(arr2)
highestNumber(arr3)

// 2.
var newArr = []
var oldArr = ["yellow", "green", "^up^", "down", "dog"]

var filter = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var oIndex = arr[i].indexOf('d');
        if (oIndex < 0) {
            continue;
        } else (newArr.push(arr[i]))
    }
    console.log(newArr)
}
          
filter(oldArr)

// 3. 
var isDivisible = function(x, y) {
    if (x % y == 0) {
        return "true";
    } else {
        return "false";
    }
}
            
console.log(isDivisible(4, 2))
console.log(isDivisible(9, 3))
console.log(isDivisible(15, 4))