import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';
import {Checkbox,Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks)
  
  // Initialize completion status array with false values
  const [completed, setCompleted] = useState(Array(tasks.length).fill(false));


  const handleCheckboxChange = (index) => {
    // Toggle the completion status at the specified index
    const newCompleted = [...completed];
    newCompleted[index] = !newCompleted[index];
    setCompleted(newCompleted);
    
    // You can dispatch an action here to update task completion in the Redux store
    console.log(`Checkbox for task ${index} clicked`);
  };

  return (
    <div className=''>
    {!tasks || tasks.length === 0 ? 

    <p className=" mt-4 w-[90%]  xl:w-1/2 border mx-auto text-2xl min-h-[60vh] flex justify-center align-middle items-center  text-center animate-pulse">No tasks available</p>

    :

      <ul className=" mt-4 xl:w-1/2 w-[90%] border mx-auto px-3 h-[60vh] overflow-y-scroll">
      {tasks.map((task, index) => (
        <li key={index} className={`z-auto py-2 px-3 ${completed[index] ? 'complete' : 'incomplete'}`}>
          <div className="mr-auto flex flex-row items-center">
            <Checkbox onChange={()=>handleCheckboxChange(index)}></Checkbox>
            <div className="mx-3 text-lg ">{task}</div>
          </div>
          <Button
          danger 
            shape="circle" icon={<DeleteOutlined className='text-red-600' />}
            onClick={() => dispatch(deleteTask(index))}
          >
            
          </Button>
        </li>
      ))}
    </ul>}
    </div>
  );
};

export default TaskList;
