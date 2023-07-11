
const form = document.getElementById('taskform');
 const inputBox = document.getElementById('input-box');
 const todoList = document.getElementById('todo-list');
// addEventListener submit a form 
form.addEventListener('submit', (event) => {
   event.preventDefault(); // refresh the form

 //  create a new <li> element and an <input> element for the checkbox
   const newTodo = document.createElement('li');
   const checkbox = document.createElement('input');
   checkbox.type = 'checkbox';


   // event listnere added to the checkbox changes event.
   checkbox.addEventListener('change', (event) => {
     if (event.target.checked) {
       newTodo.classList.add('completed');
     } else {
       newTodo.classList.remove('completed');
     }
   });

   //  create a span element to hold the text content
   const text = document.createElement('span');
   text.textContent = inputBox.value;

   if (text.textContent === '') {
     alert('Please add a task');
   } else {
     newTodo.appendChild(checkbox);
     newTodo.appendChild(text);
     todoList.appendChild(newTodo);
   }

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Close';
   deleteBtn.addEventListener('click', () => {
     newTodo.remove();
   });
   newTodo.appendChild(deleteBtn);
   inputBox.value = '';
 });
   
