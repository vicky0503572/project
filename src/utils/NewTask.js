class TaskService {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  
    getTasks() {
      return this.tasks;
    }
  }
  
  export default new TaskService();
  