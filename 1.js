async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const usersList = document.getElementById('users');

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        li.dataset.userId = user.id;
        li.addEventListener('click', () => fetchTodos(user.id));
        usersList.appendChild(li);
    });
}

async function fetchTodos(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todos = await response.json();
    const todosList = document.getElementById('todos');
    todosList.innerHTML = ''; 

    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        todosList.appendChild(li);
    });
}

fetchUsers();
