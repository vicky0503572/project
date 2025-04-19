import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './NewTask.css';
import TaskService from './utils/NewTask';

function NewTask() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [collaborator, setCollaborator] = useState('');
    const [dueDate, setDueDate] = useState('');


    const handleCreate = (e) => {
    e.preventDefault();
    // TODO: Add form validation or backend integration
    const task = {
        title,
        description,
        priority,
        collaborator,
        dueDate
      };
    TaskService.addTask(task);
    alert("Task created!");
    navigate("/home");
  };

  return (
    <div className="new-task-container">
      <div className="buttons">
        <Link to="/home" className="cancel-btn">Cancel</Link>
        <button type="submit" className="create-task-btn" onClick={handleCreate}>Create</button>
      </div>

      <h1 className="title">New Task</h1>

      <form className="new-task-form">
        <label htmlFor="title">Title</label>
        <input     type="text"
            id="task-name"
            placeholder="Enter task name"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="description">Description</label>
        <input 
            type="text"
            id="task-description"
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)} />

        <label htmlFor="collaborator">Add Collaborator</label>
        <input 
            type="text"
            id="add-collaborator"
            placeholder="Enter email address"
            value={collaborator}
            onChange={(e) => setCollaborator(e.target.value)} />

        <label htmlFor="due-date">Due Date</label>
        <input 
            type="date"
            id="due-date"
            className="due-date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)} />

        <label htmlFor="priority">Priority</label>
        <select 
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="">-- Select Priority --</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
      </form>
    </div>
  );
}

export default NewTask;
