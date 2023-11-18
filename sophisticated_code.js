/* sophisticated_code.js */

// Filename: sophisticated_code.js
// Description: This code demonstrates an elaborate and complex implementation of a task management system.

// Define the Task class
class Task {
  constructor(id, title, description, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }

  markAsComplete() {
    this.status = "complete";
  }

  markAsIncomplete() {
    this.status = "incomplete";
  }
}

// Define the TaskManager class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const id = this.tasks.length + 1;
    const task = new Task(id, title, description, "incomplete");
    this.tasks.push(task);
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  getTaskById(id) {
    return this.tasks.find((task) => task.id === id);
  }

  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  }

  getAllTasks() {
    return this.tasks;
  }

  markTaskAsComplete(id) {
    const task = this.getTaskById(id);
    if (task) {
      task.markAsComplete();
    }
  }

  markTaskAsIncomplete(id) {
    const task = this.getTaskById(id);
    if (task) {
      task.markAsIncomplete();
    }
  }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Add tasks to the task manager
taskManager.addTask("Complete Project", "Finish the final deliverable by Friday");
taskManager.addTask("Prepare presentation", "Create slides and rehearse");
taskManager.addTask("Schedule meeting", "Book a conference room");

// Print all tasks
console.log("All Tasks:");
console.log(taskManager.getAllTasks());
console.log("--------------------");

// Mark a task as complete
taskManager.markTaskAsComplete(2);

// Print all incomplete tasks
console.log("Incomplete Tasks:");
console.log(taskManager.getTasksByStatus("incomplete"));
console.log("--------------------");

// Delete a task
taskManager.deleteTask(1);

// Print all tasks after deletion
console.log("All Tasks after deletion:");
console.log(taskManager.getAllTasks());
console.log("--------------------");

// Mark a task as incomplete
taskManager.markTaskAsIncomplete(2);

// Print all tasks again
console.log("All Tasks:");
console.log(taskManager.getAllTasks());
console.log("--------------------");

// Additional code and functionality can be added below...

// End of file