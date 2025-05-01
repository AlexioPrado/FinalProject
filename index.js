
let tasks = [];

let addTask = document.getElementById('submit');
let important = document.getElementById('important');
let importantMark = false;

//this updates the importantMark variable which indicates if the task is important or not
important.addEventListener('change', function() {
    if (importantMark){
        importantMark = false;
    } else {
        importantMark = true;
    }
})

//first validates the name of the task
addTask.addEventListener('click', function() {
    let taskName = document.getElementById('name');
    if (!taskName.value){
        alert('Task was not entered')
    } else {
        taskAdder()
    }
});

//where all the mess begins
function taskAdder() {
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

    //naming newtask with task name
    newTask.name = name;

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
    day.textContent = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
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

    // this allows to strikethrough the task. It checks first if its already striked, then removes it. If not, places the strike.
    let line = false;
    done.addEventListener('change',function(){
        if(line){
            document.getElementById(done.id).style.textDecoration = 'none';
            line = false;
            changecomp(false,done);
        }else {
            document.getElementById(done.id).style.textDecoration = 'line-through';
            line = true;
            changecomp(true,done)
        }
    })

    //the most disgusting code i have ever written, i dont want to look at it
    //This deletes the task from the taskmanager tag and the tasks list
    del.addEventListener('click', function() {
        for (let i in tasks){
            if (tasks[i].id === newTask.id & tasks[i].name === newTask.name.textContent){
                tasks.splice(i,1)
            }
        }
        document.getElementById(newTask.id).remove();
        consoling()
    })

    //id,name,priority,isimportant,iscompleted,date
    let taskObject = {
        id:newTask.id,
        name: name.textContent,
        priority: priority.textContent,
        date: day.textContent,
        isimportant: importantMark,
        iscompleted: line,
     }

    
    // pushing the new task in the tasks array
    tasks.push(taskObject)
    consoling()

    //consoling the array
    function consoling(){
        const taskList = JSON.stringify(tasks) 
        console.log(taskList)
    }
    
    // changing the value of completion in the array whenever a task is done
    function changecomp(value,task) {
        for (let i in tasks){
            if (tasks[i].id === task.id){
                tasks[i].iscompleted = value;
                consoling()
            }
        }
    }
};


