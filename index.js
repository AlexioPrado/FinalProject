
let tasks = [];

let addTask = document.getElementById('submit');
let important = document.getElementById('important');
let importantMark = false;

important.addEventListener('change', function() {
    if (importantMark){
        importantMark = false;
    } else {
        importantMark = true;
    }
})

addTask.addEventListener('click', function() {
    //Create row tag
    let newTask = document.createElement('tr');
    newTask.id = tasks.length + 1;
    if(importantMark){
        newTask.style.backgroundColor = 'red';
        newTask.style.color = 'white';
    }

    //creating cell values & important
    let name = document.createElement('td');
    let priority = document.createElement('td');
    let day = document.createElement('td');
    let actions = document.createElement('td')
    let important = document.getElementById('important'); // Check box if its important

    // Creating Done checkbox
    let done = document.createElement('input');
    let label = document.createElement('label');
    label.textContent = 'Done';
    done.type = 'checkbox';
    done.id = newTask.id;

    
    // Creating Delete Button
    let del = document.createElement('button');
    del.textContent = 'Delete';
    del.type = 'button';
    del.id = newTask.id;
    
    //create Date
    const date = new Date();

    //Place values to day, name, and priority
    day.textContent = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    name.textContent = document.getElementById('name').value;
    priority.textContent = document.getElementById('priority').value;

    //Appending done, label, and delete to action td
    actions.append(done,label,del)
    //appending name, priority, day, and actions to newtask td
    newTask.append(name,priority,day,actions);
    //new task to document
    document.getElementById('table').append(newTask)

    //resets form
    document.getElementById('chicken').reset();
    importantMark = false;

    //id,name,priority,isimportant,iscompleted,date
    let taskObject = {
                        id:newTask.id,
                        name: name.textContent,
                        priority: priority.textContent,
                        date: day.textContent,
                        isimportant: importantMark,
                     }

    tasks.push(taskObject)
    const taskList = JSON.stringify(tasks) 
    console.log(taskList)

    let line = false;
    done.addEventListener('change',function(){
        if(line){
            document.getElementById(done.id).style.textDecoration = 'none';
            console.log('im here')
            line = false;
        }else {
            document.getElementById(done.id).style.textDecoration = 'line-through';
            line = true;
        }
        console.log(done.id)
        
    })




});


