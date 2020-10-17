import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Register.css';
import { useAuth } from '../Login/UseAuth';

const Register = () => {
    const auth =useAuth();
    const {taskId}=useParams();
    const [task, setTask]= useState({});
    console.log(task)
    useEffect(()=>{
        fetch('http://localhost:5000/task/' +taskId)
        .then(res=> res.json())
        .then(data=> setTask(data))
    },[taskId])
    const history= useHistory();
    const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
       const newReg= {...auth.user, regInfo:data, ...task };

       fetch('http://localhost:5000/addRegInfo', {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(newReg)
      })
      .then(res=>res.json())
      .then(data=>{
        history.push('/regEvents')
      })
  }

  
    return (
        <div style={{marginTop:'20px'}} className="reg text-center" >
            <h3>Register as a volunteer</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input value={auth.user.name} /> 
              <br/> 
            
             <br/>
            <input value={auth.user.email} /> 
            <br/> 
            

              <br/>  
            
            <input type="date" name="date" ref={register({ required: true })} /> <br/> 
            {errors.date && <span>Date is required</span>}
            <br/>
            <input placeholder="Description"  name="description" ref={register({ required: true })} /> <br/> 
            
            {errors.description && <span>Description is required</span>}
             <br/>   
            <input name="title" ref={register({ required: true })} value={task.title} /> <br/> 
            
            
            <br/>
            <input style={{cursor:'pointer'}} className="bg-primary text-white submit" type="submit" />
    </form>
        </div>
    );
};

export default Register;