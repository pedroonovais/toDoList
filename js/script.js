const inputNewTask = document.querySelector('#new-task')
const btnNewTask = document.querySelector('#btn-new-task')
const inputError = document.querySelector('#input-error')

const todoTask = document.querySelector('#todo-list')

const taskArray = JSON.parse(localStorage.getItem("tasks")) || []

if (taskArray === null || taskArray.length == 0){
    console.log('Chegou')
    const noUsers = document.createElement("p")
    const errorMessage = document.createTextNode("Sem tarefas no momento 😀!")
    noUsers.appendChild(errorMessage)
    inputError.appendChild(noUsers)
}else{
    taskArray.forEach(task => {
        const taskItem = document.createElement("li");
        const taskValue = document.createTextNode(task.nameTask);
        taskItem.appendChild(taskValue);
        todoTask.appendChild(taskItem);
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

    console.log('chegando')
})