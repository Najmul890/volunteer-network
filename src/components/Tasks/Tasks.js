import React, { useEffect } from 'react';
import { useState } from 'react';
import Task from '../Task/Task';

const Tasks = () => {
    const [tasks, setTasks]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
        .then(res=>res.json())
        .then(data=> setTasks(data))
    },[])
    
    return (
        <div
          style={{display: 'grid',
          gridTemplateColumns: 'repeat(4, auto)',
          gap: '20px'}}
          className="container">
            
            
                
                {
                tasks.map(task=> <Task key={task.id} task={task} ></Task> )
            }
                
            
            
        </div>
    );
};

export default Tasks;
