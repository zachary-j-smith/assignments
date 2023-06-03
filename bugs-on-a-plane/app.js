var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector;
let diet = document.getElementsByClassName("diet");

submit.addEventListener("click", formAlert);

function formAlert() {
        var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var checkedDiet = [];
    var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedDiet.push(checkedBoxes[i].value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + checkedDiet + "\nAwesome, now if you die, it won't be an accident..");
}

