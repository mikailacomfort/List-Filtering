let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  for (let i = 0; i < arrayOfTodos.length; i++) {
  let todoList = document.getElementById("todo-list")

  let todoItem = document.createElement("LI")

  let todoTitle = document.createTextNode(arrayOfTodos[i].title)
  
  todoItem.appendChild(todoTitle)
  
  todoList.appendChild(todoItem)
}}

const clearTodos = () => {
  const todos = document.getElementsByTagName("OL")
  for (let i=0; i < todos.length; i++) {
  todos[i].innerHTML = null  
  }
}

const filterTodos = () => {
  clearTodos()

  let userInput = document.getElementById("number").valueAsNumber

  let filteredTodos = arrayOfTodos.filter((array) => array.userId === userInput)

  for (let i = 0; i < filteredTodos.length; i++) {
    let todoList = document.getElementById("todo-list")
  
    let todoItem = document.createElement("LI")
  
    let todoTitle = document.createTextNode(filteredTodos[i].title)
    
    todoItem.appendChild(todoTitle)
    
    todoList.appendChild(todoItem)
  }
}

const completedTodos = () => {
  clearTodos()

  let filteredTodos = arrayOfTodos.filter((array) => array.completed === true)

  for (let i = 0; i < filteredTodos.length; i++) {
    let todoList = document.getElementById("todo-list")
  
    let todoItem = document.createElement("LI")
  
    let todoTitle = document.createTextNode(filteredTodos[i].title)
    
    todoItem.appendChild(todoTitle)
    
    todoList.appendChild(todoItem)
  }
}
