const inputNewTask = document.querySelector('#new-task')
const btnNewTask = document.querySelector('#btn-new-task')
const inputError = document.querySelector('#input-error')

const todoTask = document.querySelector('#todo-list')

const taskArray = JSON.parse(localStorage.getItem("tasks")) || []

if (taskArray === null || taskArray.length == 0){
    const noUsers = document.createElement("p")
    const errorMessage = document.createTextNode("Sem tarefas no momento 😀!")
    noUsers.appendChild(errorMessage)
    inputError.appendChild(noUsers)
}else{
    taskArray.forEach(task => {
        const taskItem = document.createElement("li")
        const imgTrash = document.createElement('img')
        const taskValue = document.createTextNode(task.nameTask)

        imgTrash.src = './img/trash.svg'
        imgTrash.style.width = "20px"
        imgTrash.classList.add('remove-task')

        imgTrash.addEventListener('click', () => {
            const taskToRemove = taskArray.indexOf(task)
            taskArray.splice(taskToRemove, 1)
            taskItem.remove()
            localStorage.setItem("tasks", JSON.stringify(taskArray))

            if (taskArray === null || taskArray.length == 0){
                const noUsers = document.createElement("p")
                const errorMessage = document.createTextNode("Sem tarefas no momento 😀!")
                noUsers.appendChild(errorMessage)
                inputError.appendChild(noUsers)
            }
        })

        taskItem.appendChild(taskValue)
        taskItem.appendChild(imgTrash)
        todoTask.appendChild(taskItem)
    });
}

inputNewTask.addEventListener('blur', () => {
    if (inputNewTask.value === "") {
        inputError.textContent = "O Campo não pode ser vazio!"
        return
    }

    inputError.textContent = ""
    btnNewTask.disabled = false
})

btnNewTask.addEventListener('click', () => {
    const task = {
        nameTask: inputNewTask.value
    }
    taskArray.push(task)
    localStorage.setItem("tasks", JSON.stringify(taskArray))
})