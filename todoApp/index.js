document.addEventListener('DOMContentLoaded', () => {
    const inputId = document.querySelector('#input-id');
    const submitBtn = document.querySelector('#submit-btn');
    const listOfTask = document.querySelector('#list-id');

    let listArr = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render saved tasks on page load
    listArr.forEach(e => {
        renderFun(e);
    });

    submitBtn.addEventListener('click', function () {
        if (inputId.value.trim() === "") return;

        // Add task to array
        listArr.push(inputId.value);
        saveTasks();

        // Render new task
        renderFun(inputId.value);

        // Clear input
        inputId.value = "";
    });

    function renderFun(task) {
        const li = document.createElement('li');
        li.textContent = task;
        listOfTask.appendChild(li);
    }

    function removeEl(){
    document.removeChild(listOfTask)
    
        }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(listArr));
    }
});


