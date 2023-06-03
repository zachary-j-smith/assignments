// 1. Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
// capilizeAndLowercase("HelLo") // => "HELLOhello"

function capitalizeAndLowercase(string) {
    var big = string.toUpperCase()
    var small = string.toLowerCase()
    var upperAndLowercase = big.concat(small)
    return upperAndLowercase
}
var str = "heLlO"
console.log( capitalizeAndLowercase(str))
var person = "Zachary"
console.log(capitalizeAndLowercase(person))

// 2. Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
// Hint: You'll need to use Math.floor().
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

function findMiddleIndex(string) {
    var middleIndex = Math.floor(string.length / 2)
    return middleIndex
}
var str1 = "hello"
var str2 = "hello world"
console.log(findMiddleIndex(str1))
console.log(findMiddleIndex(str2))

// 3. Write a function that uses `[slice()]` and the other functions you've written to return the first half of the given string.
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

function returnFirstHalf(string) {
    var middleIndex = Math.floor(string.length / 2)
    var firstHalf = string.slice(0, middleIndex)
    return firstHalf
}
console.log(returnFirstHalf(str1))
console.log(returnFirstHalf(str2))

// 4. Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
// Hint: If your string length is odd, use Math.floor() to round down.
// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

function bigHalfLittleHalf(string) {
    var middleIndex = Math.floor(string.length /2)
    var firstHalf = string.slice(0, middleIndex).toUpperCase()
    var secondHalf = string.slice(middleIndex).toLowerCase()
    var newString = firstHalf + secondHalf
    return newString
}

var str3 = "hello"
var str4 = "hello world"
console.log(bigHalfLittleHalf(str3))
console.log(bigHalfLittleHalf(str4))
console.log(bigHalfLittleHalf(person))