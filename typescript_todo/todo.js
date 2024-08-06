var tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log("Task added");
}
function removeTask(task) {
    var i;
    var taskindex = -1;
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].id != undefined && tasks[i].id == task.id) {
            taskindex = i;
        }
    }
    if (taskindex != -1) {
        delete tasks[taskindex];
    }
    else {
        console.log('task not in the list');
    }
}
function displayTask(task) {
    var i;
    var taskindex = -1;
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i] != undefined && tasks[i].id == task.id) {
            taskindex = i;
        }
    }
    if (taskindex != -1) {
        console.log(tasks[taskindex].task);
    }
    else {
        console.log('task not in the list');
    }
}
var task1 = {
    id: 1,
    task: 'read',
    startDate: new Date,
    EndDate: new Date
};
addTask(task1);
removeTask(task1);
displayTask(task1);
