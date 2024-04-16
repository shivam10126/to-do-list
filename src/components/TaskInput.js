import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions/taskActions';
import { Input, Button } from 'antd';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

 

  const handleSubmit = () => {
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
    
  };

  return (
    <div className="mb-5 mt-16 ">
        <div className="flex flex-row w-1/3 mx-auto gap-x-4 ">
          <Input 
            placeholder="Enter task" 
            value={task} 
            onChange={handleInputChange}  
          />
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Add
          </Button>
        </div>
    </div>
  );
};

export default TaskInput;
