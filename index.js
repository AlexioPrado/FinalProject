let addTask = document.getElementById('submit');

addTask.addEventListener('click', function() {
    let newTask = document.createElement('tr');
    let name = document.createElement('td');
    name.textContent = document.getElementById('name').value;
    console.log(name.value)
});