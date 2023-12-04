const boxes = document.querySelectorAll('.box');
let taskCounter = 1;

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
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

    const data = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(data);

    if (draggable.classList.contains('item')) {
        // Siirrä vain siirrettävät objektit
        const destinationBox = e.target.closest('.box');
        const isNewTask = !draggable.dataset.taskId;

        if (isNewTask) {
            // Päivitä tehtävän numero vain, jos se on uusi tehtävä
            const taskId = 'task-' + taskCounter++;
            draggable.id = taskId;
            draggable.textContent = 'Tehtävä ' + taskId.split('-')[1];
            draggable.dataset.taskId = taskId;
        }

        destinationBox.appendChild(draggable);
        draggable.classList.remove('hide');
    }
}

function lisaaTehtava() {
    // Lisää uusi siirrettävä objekti
    const newTask = document.createElement('div');
    const taskId = 'task-' + taskCounter;
    newTask.id = taskId;
    newTask.textContent = 'Tehtävä ' + taskCounter;
    newTask.draggable = true;
    newTask.classList.add('item');
    newTask.addEventListener('dragstart', dragStart);
    document.querySelectorAll('.box')[0].appendChild(newTask);

}

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});