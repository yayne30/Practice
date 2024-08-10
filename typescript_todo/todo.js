"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputText = document.querySelector('input');
var mytasks = document.querySelector("ul");
var addButton = document.querySelector('button');
var tasks = [];
var id_no = 0;
addButton.addEventListener("click", function () {
    addTask();
    displayTask(tasks);
});
function addTask() {
    var _a;
    var task = {
        id: ++id_no,
        task_text: (_a = inputText.value) !== null && _a !== void 0 ? _a : "LL",
    };
    tasks.push(task);
    inputText.value = "";
}
function displayTask(tasks) {
    if (tasks.length === 0) {
        var para = document.createElement('p');
        para.textContent = "no to_do";
        mytasks.appendChild(para);
    }
    else {
        tasks.forEach(function (t) {
            var li = document.createElement('li');
            li.textContent = t.task_text;
            mytasks.append(li);
        });
    }
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
