import React from 'react';
import { Link} from 'react-router-dom';

const Task = (props) => {
     const {title, id, img}=props.task;
    return (
        <div className='text-center' style={{position:'relative'}} >
            
               <Link to={"/task/"+id} >
               <h3 style={{background:'goldenrod',width:'100%',paddingBottom:'10px',position:'absolute',color:'#fff', bottom:'-10px'}} >{title} </h3>
               <img style={{width:'100%',}} src={img} alt=""/>
               </Link>
            
        </div>
    );
};

export default Task;