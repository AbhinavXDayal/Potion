const InputBox = document.getElementById("Input_Box")
const ListContainer = document.getElementById("List_container")

function AddTask() 
{
    if (InputBox.value === '') 
    {
        alert("You must write something")
    }
    else 
    {
        let Li = document.createElement("li")
        Li.innerHTML = InputBox.value

        ListContainer.appendChild(Li)

        let Span = document.createElement("span")
        Span.innerHTML = "\u00d7"
        Li.appendChild(Span)
    }
    InputBox.value = ""
    SaveData()
}

ListContainer.addEventListener("click", function (e) 
{
    if (e.target.tagName === "LI") 
    {
        e.target.classList.toggle("Checked")
        SaveData()
    }
    else if (e.target.tagName === "SPAN") 
    {
        e.target.parentElement.remove()
        SaveData()
    }
}, false)

function SaveData() 
{
    localStorage.setItem("data", List_container.innerHTML)
}

function ShowTask() 
{
    List_container.innerHTML = localStorage.getItem("data")
}
ShowTask()