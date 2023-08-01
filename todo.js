const input = document.getElementById('input');
const form = document.getElementById('form');
const ul = document.getElementById('ul');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  saveData();
});

const todos = [];

const saveData = () => {
  let todo = input.value;
  if(todo) {
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
  }
}
