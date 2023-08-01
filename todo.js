// hennnatodo
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
    rendTodo();
  }
}

const rendTodo = () => {
  const datas = JSON.parse(localStorage.getItem('todos'));
  const li = document.createElement('li');
  li.innerText = datas[datas.length - 1];
  ul.appendChild(li);

  li.addEventListener('click', (e) => {
    const removeTodo = todos.findIndex(todo => todo === e.target.innerText);
    todos.splice(removeTodo, 1);
    console.log(todos);
    ul.removeChild(e.target);
  });
}