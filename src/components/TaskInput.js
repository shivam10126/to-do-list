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
    <div className="mb-5 mt-7 xl:mt-16 ">
        <div className="flex  flex-col md:w-[70%] md:flex-row px-3 xl:w-1/3 mx-auto gap-y-3 gap-x-4 ">
          <Input 
            placeholder="Enter task" 
            value={task} 
            onChange={handleInputChange}  
          />
          <Button type="primary" className='w-1/3 mx-auto' htmlType="submit" onClick={handleSubmit}>
            Add
          </Button>
        </div>
    </div>
  );
};

export default TaskInput;
