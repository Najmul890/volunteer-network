import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Event from '../Event/Event';
import { useAuth } from '../Login/UseAuth';
import './TaskEvents.css';

const TaskEvents = () => {
    const [events, setEvents]= useState([]);
    const auth=useAuth();
    
    const fetchData =()=>{
        fetch('http://localhost:5000/regEvents?email='+auth.user.email)
        .then(res=> res.json())
        .then(data=> setEvents(data))
    }

    useEffect(()=>{
           fetchData();
    },[]) 

    return (
        <div className="container-fluid">
            <h2>You have registered {events.length} events. </h2>
            <div style={{display: 'grid',padding:'20px 10px',
                         gridTemplateColumns: 'repeat(2, auto)',
                         gap: '10px'}} >
                {
                    events.map(event=> <Event fetchData={fetchData} key={event.id} event={event} ></Event> )
                }
            </div>
        </div>
    );
};

export default TaskEvents;