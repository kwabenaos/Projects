//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList =document.querySelector(".todo-list");
const filterOption =document.querySelector(".filter-todo");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click",filterTodo);



// Functions
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";    }
                
        }

    }); 


};

function deleteCheck(e){
   const item = e.target;
    // Delete Todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
        todo.remove();            
        });

    }

    //Check mark
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }

}

function addTodo(event){
// Prevent form from submitting 
    event.preventDefault();
//Create Todo Div
  const todoDiv =document.createElement("div");
 todoDiv.classList.add("todo")

//create LI
 const newTodo = document.createElement("li");
 newTodo.innerText = todoInput.value;
 newTodo.classList.add("todo-item");
 todoDiv.appendChild(newTodo);

 //Checkmark button
 const completedButton = document.createElement("button");
 completedButton.innerHTML = "<i class = 'fas fa-check'></i>"
 completedButton.classList.add("completed-btn");
 todoDiv.appendChild(completedButton);

  //Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class= 'fas fa-trash'></i>";
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);

  //clear Input
  todoInput.value = "";




}