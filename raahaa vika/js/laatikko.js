const boxes = document.querySelectorAll('.box');
let taskCounter = 1;

function dragStart(e) {
    const taskId = e.target.dataset.taskId;
    e.dataTransfer.setData('text/plain', taskId);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    const taskId = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(taskId);

    if (draggable && draggable.classList.contains('item')) {
        // Siirrä vain siirrettävät objektit
        const destinationBox = e.target.closest('.box');
        const isNewTask = !draggable.dataset.taskId;

        if (isNewTask) {
            // Päivitä tehtävän numero vain, jos se on uusi tehtävä
            const newTaskId = 'task-' + taskCounter++;
            draggable.id = newTaskId;
            draggable.textContent = 'Tehtävä ' + newTaskId.split('-')[1];
            draggable.dataset.taskId = newTaskId;
        }

        destinationBox.appendChild(draggable);
        draggable.classList.remove('hide');
    }
    logTasks();
}

function lisaaTehtava() {
    // Lisää uusi siirrettävä objekti
    const newTask = document.createElement('div');
    const taskId = 'task-' + taskCounter++;
    newTask.id = taskId;
    newTask.textContent = 'Tehtävä ' + taskId.split('-')[1];
    newTask.draggable = true;
    newTask.classList.add('item');
    newTask.dataset.taskId = taskId; // Tallenna alkuperäinen tehtävän numero
    newTask.addEventListener('dragstart', dragStart);
    document.querySelectorAll('.box')[0].appendChild(newTask);
    logTasks();
}

function logTasks() {
    const tasks = Array.from(document.querySelectorAll('.item')).map(task => task.dataset.taskId);
    console.log('Tasks After Drop:', ['item', ...tasks]);
}

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});
