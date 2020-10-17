import React from 'react';
import tasksData from '../../taskData';

const Admin = () => {
    // const handleAddTasks=()=>{
    //     fetch('http://localhost:5000/addTasks', {
    //         method: 'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(tasksData)
    //     })
    // }

    return (
        <div className="container" >
            <h2>Admin Panel</h2>
            {/* <button className="btn btn-primary" onClick={handleAddTasks} >Add Products</button> */}
        </div>
    );
};

export default Admin;