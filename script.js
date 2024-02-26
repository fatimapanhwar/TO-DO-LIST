
document.addEventListener('DOMContentLoaded' , function(){
    const taskInput = document.querySelector('#taskInput');
    const addButton = document.querySelector('#addButton');
    const taskList = document.querySelector('#taskList');
    addButton.addEventListener('click' , function(){
        const taskText = taskInput.value.trim();
        if( taskText !== ''){
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            taskItem.addEventListener('click' , function(){
                taskList.removeChild(taskItem);
            })

        }else{
            alert(' please fill this input');
        }

    })
});
