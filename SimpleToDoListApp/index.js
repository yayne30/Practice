inputText = document.querySelector('input')
mytasks = document.querySelector('ul')
addButton = document.querySelector('button')

addButton.addEventListener('click' , () =>{
    inputvalue = inputText.value
    if (inputvalue !== '')  {
        const task = document.createElement('li')
        task.textContent = inputvalue
        task.addEventListener('click', () => {
            task.remove()
        });
        mytasks.append(task)
        inputText.value =''
   
        
    }
    else{
        alert('enter the task first')
    }
    
})



