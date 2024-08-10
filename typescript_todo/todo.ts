const inputText = document.querySelector('input') as HTMLInputElement;
const mytasks = document.querySelector("ul") as HTMLUListElement;
const addButton = document.querySelector('button') as HTMLButtonElement;

interface to_doItem{
    id: number,
    task_text:string,

}

let tasks: to_doItem[] = []
let id_no = 0

addButton.addEventListener("click" , ()=>{
    addTask();
    displayTask(tasks);

});

function addTask(){
    const task: to_doItem = {
        id : ++id_no,
        task_text: inputText.value ?? "LL" , 
    }
    tasks.push(task)
    inputText.value = ""
}

function displayTask(tasks: to_doItem[]) {
    if (tasks.length === 0){
       const  para = document.createElement('p')
       para.textContent = "no to_do"
       mytasks.appendChild(para)
    }
    else{
        tasks.forEach(
            (t)=> {
                const li = document.createElement('li')
                li.textContent = t.task_text
                mytasks.append(li)
            }
        )
    }
  
    
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
export{}

