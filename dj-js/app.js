var box = document.getElementById("object")
var boxStyle = document.getElementById("object").style

box.addEventListener("mouseover", function() {
    boxStyle.backgroundColor = "blue"
})

box.addEventListener("mousedown", function() {
    boxStyle.backgroundColor = "red"
})

box.addEventListener("mouseup", function() {
    boxStyle.backgroundColor = "yellow"
})

box.addEventListener("dblclick", function() {
    boxStyle.backgroundColor = "green"
})

document.addEventListener("wheel", function() {
    boxStyle.backgroundColor = "orange"
})



document.addEventListener("keydown", function(event) {
    var key = event.key
    var color = {
        b : 'blue', 
        r : 'red',
        y : 'yellow',
        g : 'green',
        o : 'orange',
        w : 'white'
    }
    console.log(event.target)
    document.getElementById("object").style.backgroundColor = color[key]
});
