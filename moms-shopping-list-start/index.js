const form = document.addItem

form.addEventListener('submit', function(e){
    e.preventDefault()
    const newListItem = document.createElement("li")
    const subItem = createSubItem(e)
    newListItem.appendChild(subItem)
    const editButton = createEditButton(e)
    const deleteButton = createDeleteButton(e)
    newListItem.appendChild(editButton)
    newListItem.appendChild(deleteButton)
    document.getElementById("list").append(newListItem)
    form.inputBar.value = ""
})

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = form.inputBar.value + " "
    subItem.textContent = subItemValue
//    const editButton = createEditButton(e)
//    const deleteButton = createDeleteButton(e)
//    subItem.append(editButton)
//    subItem.append(deleteButton)
    subItem.setAttribute("class", "newItem")

    return subItem
}

function createEditButton(e){
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    editButton.setAttribute("class", "editButton")

    return editButton
}

function createDeleteButton(e){
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "X"
    deleteButton.setAttribute("class", "deleteButton")
    deleteButton.addEventListener('click', function(e) {
        e.target.parentNode.remove(e)
    })
    
    return deleteButton
}


// Need to work on getting my new item div to not include the edit/delete buttons //