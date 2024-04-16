export const addTask = (task) => {
  // Add task to localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  // Debug log
  console.log('Tasks before adding:', tasks,tasks.length);
  
  tasks.push(task);
  
  // Debug log
  console.log('Tasks after adding:', tasks,tasks.length);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));

  return {
    type: 'ADD_TASK',
    payload: task,
  };
};
export const addTasks = (task) => {
   return {
    type: 'ADD_TASK',
    payload: task,
  };
};

export const deleteTask = (index) => {
  // Remove task from localStorage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  // Debug log
  console.log('Tasks before deleting:', tasks,tasks.length);
  
  tasks.splice(index, 1);
  
  // Debug log
  console.log('Tasks after deleting:', tasks,tasks.length);
  
  localStorage.setItem('tasks', JSON.stringify(tasks));

  return {
    type: 'DELETE_TASK',
    payload: index,
  };
};
