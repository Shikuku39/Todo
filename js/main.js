let form = document.querySelector('form')
let tasks = document.querySelector('#tasks')

// delete a task
const deleteTask =  (e) => {
    let task = e.target.parentElement
    tasks.removeChild(task)
    checkForTasks()
}

// create a new task
const addTask = (e) => {
    e.preventDefault()
    let task = document.createElement('div')
    task.className = 'task'
    let p = document.createElement('p')
    p.textContent = document.querySelector('#new-task').value
    let button = document.createElement('button')
    button.className = 'icon'
    button.textContent = 'Delete'
    button.addEventListener('click', deleteTask)
    let img = document.createElement('img')
    img.src = 'https://res.cloudinary.com/dlkqilyi0/image/upload/v1670099126/Images/delete_qpxd0z.png'
    task.appendChild(p)
    task.appendChild(button)
    button.appendChild(img)
    tasks.appendChild(task)
    form.reset()
    checkForTasks()
}
const checkForTasks = () => {
    let count = document.querySelector('#count')
    let message = document.querySelector('#message')
    if(tasks.children.length === 0) { 
        count.textContent = 'Task: 0'
        message.textContent = 'You do not have any tasks at the moment.'
        message.style.display = 'block'
    } else if (tasks.children.length === 1) {
        message.style.display = 'none'
        count.textContent = `Task: ${tasks.children.length}`
    } else {
        message.style.display = 'none'
        count.textContent = `Tasks: ${tasks.children.length}`
    }   
}
checkForTasks()
form.addEventListener('submit', addTask)