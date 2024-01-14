let input = document.getElementById('inputbox');
let button = document.getElementById('add');
let todoList = document.getElementById('todoList');

//      CREATE AN ARRAY TO STORE THE TASKS
let todos = [];

//      ADD FUNCTION TO THE BUTTON
button.addEventListener('click', ()=>{
    if (input.value !== ""){
        todos.push(input.value);
        console.log(todos);
        addtodo(input.value);
        input.value =''
    }
    else {
        window.alert("Enter a task");
    }
})

//      THIS FUNCTION CREATES A LI ELEMENT 
function addtodo(todo) {
    let list = document.createElement('li');
    list.innerText = todo;
    todoList.appendChild(list);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    list.appendChild(span);

    todoList.addEventListener('click', (e)=>{
        if(e.target.tagName === "LI"){
            e.target.classList.add("checked");
        }
        else if(e.target.tagName === "SPAN"){
           e.target.parentElement.remove();
        }
    },false);

    span.addEventListener('click',()=>{
        remove(todo);
        console.log(todos);
    })

}
//      TO DELETE THE TASK FROM THE ARRAY
function remove(todo) {
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
    }
}