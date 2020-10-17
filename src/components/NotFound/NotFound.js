import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{marginTop:'20px'}} className="container" >
            <h4 className="text-danger" >Error: 404!</h4>
            <p>Page did not found.</p>
            <Link to="/" >Back to home</Link>
        </div>
    );
};

export default NotFound;