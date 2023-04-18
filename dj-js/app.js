var box = document.getElementById("object")

var boxColor = document.getElementById("object").style.backgroundColor 

box.addEventListener("mouseover", function() {
    document.getElementById("object").style.backgroundColor = "blue"
})

box.addEventListener("mousedown", function() {
    document.getElementById("object").style.backgroundColor = "red"
})

box.addEventListener("mouseup", function() {
    document.getElementById("object").style.backgroundColor = "yellow"
})

box.addEventListener("dblclick", function() {
    document.getElementById("object").style.backgroundColor = "green"
})

document.addEventListener("wheel", function() {
    document.getElementById("object").style.backgroundColor = "orange"
})



// e.target