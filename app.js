function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));

    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));
    deleteButton.setAttribute('onclick', 'deleteTask(this)');

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}

function deleteTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
