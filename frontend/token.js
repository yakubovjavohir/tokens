const socket = io("http://localhost:7777")
const form = document.getElementById("form")
const input = document.getElementById("input_token")
const submit = document.getElementById("submit")
const database = document.getElementById("database")
const data = document.getElementById("data")
const dataBlock = document.getElementById("dataBlock")

database.className = ""
database.style = "background-color: greenyellow; border:none; color:greenyellow;"
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const inputValue = input.value
    database.className = "submit"
    database.style = "background-color: aquamarine; border:2px solid black; color:black;"
    socket.emit("token", inputValue)
})

database.addEventListener("click", ()=>{
    data.style = "width:100%; height:100vh; background-color: white; position:fixed; z-index:5; display:flex; align-items:center;  justify-content: center;"
    socket.on("tokenData", (data)=>{
        dataBlock.style = "background-color: black; color:white; font-size:25px;"
        dataBlock.innerHTML = JSON.stringify(data)
    })
})

