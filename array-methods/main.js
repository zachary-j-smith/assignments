var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// *Console.log each result!*
// 1. Remove the last item from the vegetable array.
vegetables.pop()
// console.log(vegetables)
// 2. Remove the first item from the fruit array.
fruits.shift()
// console.log(fruits)
// 3. Find the index of "orange."
var orangeIndex = fruits.indexOf("orange")
// console.log(orangeIndex) // equals 1 since I have the first item removed(pop), it would return the index of 2 prior to the pop method.
// 4. Add that number to the end of the fruit array.
fruits.push(orangeIndex)
// console.log(fruits)
// 5. Use the length property to find the length of the vegetable array.
var veggieLength = vegetables.length
// console.log(veggieLength)
// 6. Add that number to the end of the vegetable array.
vegetables.push(veggieLength)
// console.log(vegetables)
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruits.concat(vegetables)
// console.log(food)
// 8. Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2,)
// console.log(food)
// 9. Reverse your array.
food.reverse()
// console.log(food)
// 10. Turn the array into a string and return it.
var foodString = food.join(",")
console.log(foodString)

// GOAL RESULT: 3,pepper,1,watermelon,orange,apple