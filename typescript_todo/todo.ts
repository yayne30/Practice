
interface to_doItem{
    id: number,
    task:string,
    startDate: Date,
    EndDate: Date
}

const tasks: to_doItem[] = []

function addTask(task: to_doItem): void{
    tasks.push(task)
    console.log("Task added")

}
function removeTask(task : to_doItem) {
    var i:number;
    var taskindex = -1
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].id != undefined && tasks[i].id == task.id) {
            taskindex = i
            
        }
    }
    if (taskindex != -1){
        delete tasks[taskindex];
    }
    else{
        console.log('task not in the list')
    }
}
function displayTask(task) {
    var i:number;
    var taskindex = -1;
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i] != undefined && tasks[i].id == task.id) {
            taskindex = i
           
        }
    }

    if (taskindex != -1){
        console.log(tasks[taskindex].task);
    }
    else{
        console.log('task not in the list')
    }
}


const task1: to_doItem  = {
    id : 1,
    task :  'read',
    startDate  : new Date,
    EndDate : new Date
}
addTask(task1)
removeTask(task1)
displayTask(task1)
