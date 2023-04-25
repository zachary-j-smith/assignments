const colors = ["red", "blue", "green"]

var greeting = document.createElement("h1")
greeting.textContent = "Welcome to DOM Debug!"
greeting.style.fontSize = "200%"
document.body.prepend(greeting)


document.getElementById("add").addEventListener('click', function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input").value + " "
    subItem.textContent = subItemValue
    subItem.style.fontWeight = "bold"
    const dropDown = createDropDown(e)
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}

function createDropDown(e){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++){
        const option = document.createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.setAttribute("class", "dropDown")
        dropDown.append(option)
    }
    dropDown.addEventListener('change', function(e){
        e.target.style.backgroundColor = e.target.value
        this.parentElement.style.backgroundColor = e.target.value
    })
    return dropDown
} 


// e.target.parent.backgroundColor = e.target.value