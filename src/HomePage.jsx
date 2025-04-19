import React, { useState, useEffect} from 'react';
import './HomePage.css'; // make sure the path is correct
import { Link } from 'react-router-dom';
import addIcon from './assets/add.png';
import userIcon from './assets/user.png';
import notificationIcon from './assets/notification.png';
import TaskService from './utils/NewTask';

function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const allTasks = TaskService.getTasks();
    setTasks(allTasks);
  }, []);

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h3 className="app">PRODIGY</h3>
        <h1 className="title">Workspace </h1>
        <div className="profile-container">
          <Link to="#" className="notification-btn">
              <img src={notificationIcon} alt="Notifications" title="Notifications"/>
          </Link>
          <Link to="/profile" className="profile-btn">
              <img src={userIcon} alt="Profile" title="Profile"/>
          </Link>
        </div>
      </header>

      {/* Main Layout */}
      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <Link to="/task-management">
            <button className="task-management-btn">Task Management</button>
          </Link>
          <Link to="/friends">
            <button className="friends-btn">Friends</button>
          </Link>
          <Link to="/profile">
            <button className="settings-btn">Settings</button>
          </Link>
        </aside>

        {/* Dashboard Content */}
        <section className="dashboard">
          {/* Tasks Section */}
          <div className="task-header">
            <div className="task-container">
              <h2>Tasks</h2>
              <Link to="/new-task" className="addTask-btn">
                  <img src={addIcon} alt="Create New Task" title="Create New Task"/>
              </Link>
            </div>
            <ul id="taskList">
              {tasks.map((task,index) => (
                <li key={index}>{task.title}</li>/* Dynamic task items will go here in the future */))}
            </ul>
          </div>

          {/* Activities Section */}
          <div className="activities-main-content">
            <div className="activities-container">
              <h2>Activities</h2>
            </div>
            <ul id="activitiesList">
              {/* Dynamic activity items will go here in the future */}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
