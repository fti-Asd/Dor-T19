$(document).ready(function() {
    let tasks = [
        { id: 1, text: "Landing Page Design", completed: false },
        { id: 2, text: "Dashboard Builder", completed: true },
        { id: 3, text: "Mobile App Design", completed: true },
        { id: 4, text: "Illustrations", completed: false },
        { id: 5, text: "Promotional LP", completed: true }
    ];

    function renderTasks() {
        let todoList = $(".todo-list-container");
        todoList.empty();

        $.each(tasks, function(index, task) {
            let todoItem = $(`
                <div class="d-flex justify-content-between align-items-center" data-id="${task.id}">
                    <div class="d-flex align-items-center">
                        <input type="checkbox" id="checkboxId3${index}" class="task-checkbox" ${task.completed ? "checked" : ""}>
                        <label for="checkboxId3${index}">${task.text}</label>
                    </div>
                    <div>
                        <img src="./public/icons/main-dashboard/six-dots.svg" class="drag-handle" alt="six-dots">
                    </div>
                </div>
            `);
            
            todoList.append(todoItem);
        });

        updateMainCheckbox();
    }

    function updateMainCheckbox() {
        let totalTasks = $(".task-checkbox").length;
        let checkedTasks = $(".task-checkbox:checked").length;
        let mainCheckbox = $(".all-tasks");

        if (checkedTasks === totalTasks) {
            mainCheckbox.prop("checked", true).prop("indeterminate", false);
        } else if (checkedTasks > 0) {
            mainCheckbox.prop("checked", false).prop("indeterminate", true);
        } else {
            mainCheckbox.prop("checked", false).prop("indeterminate", false);
        }
    }

    renderTasks();

    $(".all-tasks").click(function() {
        let isChecked = $(this).prop("checked");
        $(".task-checkbox").prop("checked", isChecked);
        updateMainCheckbox();
    });

    $(document).on("change", ".task-checkbox", function() {
        updateMainCheckbox();
    });
});
