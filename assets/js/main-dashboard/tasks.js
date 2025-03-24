$(document).ready(function() {
    let tasks = [
        { id: 1, text: "Landing Page Design", completed: false },
        { id: 2, text: "Dashboard Builder", completed: true },
        { id: 3, text: "Mobile App Design", completed: true },
        { id: 4, text: "Illustrations", completed: false },
        { id: 5, text: "Promotional LP", completed: true}
    ];

    function renderTasks() {
        let todoList = $(".todo-list-container");
        todoList.empty();

        $.each(tasks, function(index, task) {
            let todoItem = $(`
                <div class="d-flex justify-content-between align-items-center" data-id="${task.id}">
                    <div class="d-flex align-items-center">
                        <input type="checkbox" ${task.completed ? "checked" : ""}>
                        <span>${task.text}</span>
                    </div>
                    <div>
                        <img src="./public/icons/main-dashboard/six-dots.svg" class="drag-handle" alt="six-dots">
                    </div>
                </div>
            `);
            
            todoList.append(todoItem);
        });

        $("#todo-list").sortable({
            handle: ".drag-handle"
        });
    }

    renderTasks();
});