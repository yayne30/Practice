inputText = document.querySelector('input');
mytasks = document.querySelector("ul");
addButton = document.querySelector('button');

addButton.addEventListener('click', () => {
    const task_text = inputText.value;
    if (task_text !== '') {
         task = document.createElement('li');

     task_content = document.createElement('p');
        task_content.textContent = task_text;
        task.append(task_content);
           edit_btn = document.createElement('button');
        edit_btn.textContent = "Edit";
        task.appendChild(edit_btn);
    delete_btn = document.createElement('button');
        delete_btn.textContent = "Delete";
        task.append(delete_btn);

        edit_btn.addEventListener('click', () => {
             edit_input = document.createElement('input');
            edit_input.value = task_content.textContent;

         save_btn = document.createElement('button');
            save_btn.textContent = "Save";
        task.replaceChild(edit_input, task_content);
            task.replaceChild(save_btn, edit_btn);
            save_btn.addEventListener('click', () => {
                task_content.textContent = edit_input.value;
                task.replaceChild(task_content, edit_input);
                task.replaceChild(edit_btn, save_btn);
            });
        });

        delete_btn.addEventListener("click", () => {
            task.remove();
        });

        inputText.value = "";
        mytasks.append(task);
    } else {
        alert('empty input');
    }
});
