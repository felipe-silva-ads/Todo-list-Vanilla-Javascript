//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listenners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event){
    //Prevent Default
    event.preventDefault();

    // Create Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create Li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo)

    //Check Mark Buttoin
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)

    //Tresh Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)


    if(!todoInput.value){
        alert("Todo input field is empty")
    }else{
    //Append to List
    todoList.appendChild(todoDiv)
    todoInput.value = '';
    }

}

function deleteCheck(e){
    const item = e.target;
    //DELETE
    if(item.classList[0] === 'trash-btn' ){
        const todo = item.parentElement;
        //Animation DELETE
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all" :
                 todo.style.display = "flex";
            break;
            case "completed" :
                if(todo.classList.contains("completed")){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
        }
    })
}
