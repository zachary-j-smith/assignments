var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
// var newArr = []
// var people2 = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
// for (var i = 0; i < people.length; i++) {
//     newArr.push(people[i])
//     var alphabetArr = alphabet.split("")
//     for (var j = 0; j < alphabet.length; j++)
//     newArr.push(alphabet[j])
// }
// console.log(newArr)


function forception(peo, alpha) {
    let newArr = []
    for (var i = 0; i < peo.length; i++) {
        newArr.push(peo[i])
        var alphaArr = alpha.split("")
        for (var j = 0; j < alphaArr.length; j++)
        newArr.push(alphaArr[j])
    }
    return newArr
}
console.log(forception(people, alphabet))

// var persons = ["Jim", "Dwight", "Michael", "Pam", "Jan"]
// var alphaTest = "zyxwvutsrqponmlkjihgfedcba"
// console.log(forception(persons, alphaTest))