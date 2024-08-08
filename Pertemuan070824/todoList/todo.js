export class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
}

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks = [...this.tasks, task];
        return task;
    }

    removeTask(index) {
        this.tasks = this.tasks.filter((_, i) => i !== index);
    }
}
