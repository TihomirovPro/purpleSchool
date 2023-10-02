'use strict';

const toDoList = {
  tasks: [{title: 'Задача 1', id: 1, priority: 1}],
  addTask(title, priority) {
    this.tasks.push({title, priority, id: this.tasks.length + 1 });
    console.log(this.tasks);
  },
  removeTask(id) {
    const task = this.tasks.find(el => el.id === id);
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.tasks.map((el, i) => el.id = i+1);
    console.log(this.tasks);
  },
  updateTask(id, newTitle, newPriority) {
    const task = this.tasks.find(el => el.id === id);
    if (newTitle) { task.title = newTitle }
    if (newPriority) { task.priority = newPriority }
    console.log(this.tasks);
  },
  sortTasks() {
    this.tasks.sort((a,b) => a.priority - b.priority);
    console.log(this.tasks);
  }
}

const newToDoList = {
  tasks: [{title: 'Задача 1' , description: '', id: 1, priority: 1}]
}

newToDoList.addTask = toDoList.addTask.bind(newToDoList)
newToDoList.removeTask = toDoList.removeTask.bind(newToDoList)
newToDoList.updateTask = toDoList.updateTask.bind(newToDoList)
newToDoList.sortTasks = toDoList.sortTasks.bind(newToDoList)