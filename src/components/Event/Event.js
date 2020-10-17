import React from 'react';

const Event = ({event,fetchData}) => {
    console.log(event)
    const deleteTask = (id)=>{
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(result=>{
            fetchData()
        })  
    }
    return (
        <div style={{marginTop:'20px'}} className="row">
            <div  className="col-md-5">
                <img style={{height:'200px',width:'180px'}} src={event.img} alt=""/>
            </div>
            <div className="col-md-7">
                <h3> {event.title} </h3>
                <h5> {event.regInfo.date} </h5> <br/>
                <button style={{background:'lightGray'}} className='btn' onClick={()=>deleteTask(event.id)} >Cancel</button>

            </div>
        </div>
    );
};

export default Event;