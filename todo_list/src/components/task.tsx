import { useState } from "react";
import "./task.css";

export default function Task() {
  interface todo {
    id: number;
    todo_task: string;
  }


  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<todo[]>([]);
  const [nextId , setnextId] = useState<number> (0)
//   const [editTask , seteditTask] = useState<todo>()
  const [editTaskId, setEditTaskId] = useState<number>();
  const [edittask, setEditTask] = useState<string>("");

  function handleAddClick() {
    if (task.trim() !== "") {
      const new_task: todo = {
        id: nextId,
        todo_task: task,
      };
      setTasks([...tasks, new_task]);
      setTask("");
      setnextId(nextId + 1)
    }
  }
  function handleEdit(t: todo) {
    // seteditTask(t)
    setEditTask(t.todo_task);
    setEditTaskId(t.id);
  }

  function handleSave(task:todo){
    edittask !== "" ?
  (  setTasks((prevTasks) => 
        prevTasks.map((t) => t.id == task.id  ? {...t , todo_task: edittask.trim()} : t) )):(
            handleDelete(task)
        )
    setEditTask("")
    setEditTaskId(undefined)
  }
function handleDelete(task:todo){
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id))
}
  return (
    <div className="task_container">
        <h1> Today's Todo list </h1>
      <div className="addtask_wrapper">
        <input
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task here"
          value={task}
          className="task_input"
        />
      
        <button onClick={handleAddClick} className="add_btn"> Add task </button>
        </div>
        <div className="tasklist_wrapper">
          {tasks.length === 0 ? (
            <p className="no_task"> No task for today :)</p>
          ) : (
            <ul className="task_list">
              {tasks.map((t) => (
        
                  <li key={t.id} className="task">
                    {editTaskId === t.id ? (
                      <>
                        <input className = " edit_input"value={edittask} onChange={(e) =>{setEditTask(e.target.value)}}/>
                        <button className="save_btn" onClick={() =>{handleSave(t)}}> Save</button>
                      </>
                    ) : (
                      <>
                        <span className="input_text">📝{t.todo_task}</span>
                        <button className = "edit_btn" onClick={() => handleEdit(t)}> Edit </button>
                      </>
                    )}

                    <button onClick={() => handleDelete(t)} className="delete_btn"> Delete </button>
                  </li>
            
              ))}
            </ul>
          )}
        </div>
    
    </div>
  );
}
