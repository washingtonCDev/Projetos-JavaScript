const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoToList(todoText);
        input.value = '';
    }
});

function addTodoToList(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;
    li.classList.add('todo-item');

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', function() {
        const newText = prompt('Edite a tarefa:', li.textContent);
        if (newText !== null && newText.trim() !== '') {
            li.textContent = newText.trim();
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
}
