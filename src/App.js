import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { addTasks } from './actions/taskActions';
import './App.css';

const App = () => {
  useEffect(() => {
    // Load tasks from localStorage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Debug log
    console.log('Tasks from localStorage:', storedTasks,storedTasks.length);
  
    // Get current tasks from Redux store
    const currentTasks = store.getState().tasks;
  
    // Filter out tasks that already exist in Redux store
    const newTasks = storedTasks.filter(task => !currentTasks.includes(task));
  
    // Dispatch addTask for each new task
    newTasks.forEach(task => {
      store.dispatch(addTasks(task));
    });
  }, []);

  return (
    <Provider store={store}>
      <div className="h-[100vh] align-middle items-center border">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <h1 className="text-center my-4 text-6xl font-bold">React To-Do App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
