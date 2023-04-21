const container = document.createElement("p");
const header = document.getElementById("header");
container.appendChild(header);
const me = document.createElement("span");
const span = document.createElement("span");

header.after(me)
me.after(span)

document.body.prepend(container);

header.textContent = "JavaScript Made This!!"
span.textContent = " wrote the JavaScript"
me.textContent = "Zachary Smith "
me.className += "name"
container.className = "container"

container.style.textAlign = "center"
container.style.textAlign = "25px"
header.style.marginBottom = "25px"
container.style.fontWeight = "bold"
header.style.fontSize = "75px"
me.style.fontSize = "25px"

const clear = document.getElementById("clear-button")
var main = document.getElementById("main")
var messages = document.querySelectorAll(".messages > div")
console.log(messages)
messages[0].textContent = "I don't want you to talk to me unless it's about work."
messages[1].textContent = "Okay I can do that."
messages[2].textContent = "Okay great show me the expense reports for this week."
messages[3].textContent = "Serious question real quick, what perfume are you wearing?"

clear.addEventListener('click', function (){
    for(var i=0; i < messages.length; i++) {
        messages[i].textContent = ""
        messages[i].style.backgroundColor = "white"
    };
}) 

var leftMessages = document.querySelectorAll(".left")
console.log(leftMessages)

var dropDown = document.getElementById("theme-drop-down")
var themes = dropDown.options
console.log(dropDown.value)

dropDown.addEventListener('change', function (){
    console.log(dropDown.value)
/*    if (dropDown.value = "theme-one") {
        messages[0].style.backgroundColor = "burlywood"
        messages[2].style.backgroundColor = "burlywood"
        messages[1].style.backgroundColor = "lightblue"
        messages[1].style.color = "black" 
        messages[3].style.backgroundColor = "lightblue"
        messages[3].style.color = "black"
    }   else */ if (dropDown.value = "theme-two") {
        messages[0].style.backgroundColor = "lightcoral"
        messages[2].style.backgroundColor = "lightcoral"
        messages[1].style.backgroundColor = "black"
        messages[1].style.color = "white" 
        messages[3].style.backgroundColor = "black"
        messages[3].style.color = "white"
    } else {}
}) 

/* var array = dropDown.options
var themeOne = dropDown.options[0]
var themeTwo = dropDown.options[1]
themeOne.addEventListener('click', function (){
    messages[0].style.backgroundColor = "burlywood"
    messages[2].style.backgroundColor = "burlywood"
    messages[1].style.backgroundColor = "lightblue"
    messages[1].style.color = "black" 
    messages[3].style.backgroundColor = "lightblue"
    messages[3].style.color = "black";
})

themeTwo.addEventListener('click', function (){
    messages[0].style.backgroundColor = "lightcoral"
    messages[2].style.backgroundColor = "lightcoral"
    messages[1].style.backgroundColor = "black"
    messages[1].style.color = "white" 
    messages[3].style.backgroundColor = "black"
    messages[3].style.color = "white";
}) 8*/