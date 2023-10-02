'use strict';

const toDoList = {
  tasks: [{title: 'Задача 1', id: 1, priority: 1}],
  addTask: function(title, priority) {
    this.tasks.push({title, priority, id: this.tasks.length});
    console.log(this.tasks);
  },
  removeTask: function(id) {
    const task = this.tasks.find(el => el.id === id);
    this.tasks.splice(this.tasks.indexOf(task), 1);
    console.log(this.tasks);
  },
  updateTask: function(id, newTitle, newPriority) {
    const task = this.tasks.find(el => el.id === id);
    if (newTitle) { task.title = newTitle }
    if (newPriority) { task.priority = newPriority }
    console.log(this.tasks);
  },
  sortTasks: function() {
    this.tasks.sort((a,b) => a.priority - b.priority);
    console.log(this.tasks);
  }
}

toDoList.addTask('Задача 2', 3)
toDoList.addTask('Задача 3', 5)
toDoList.addTask('Задача 4', 8)
toDoList.addTask('Задача 5', 2)
toDoList.removeTask(2)
toDoList.updateTask(1, 'новое название', 8)
toDoList.sortTasks()