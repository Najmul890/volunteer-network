import React from 'react';

import Auth from './UseAuth';


const Login = () => {
    const auth= Auth();
    
    const handleSignIn =()=>{
        auth.signInWithGoogle()
        .then(res=>{
            
            window.history.back()
        })
    }
    const handleSignOut= ()=>{
        auth.signOut()
        .then(res =>{
            window.location.pathname='/';
        })
    }
    return (
        <div  className="container-fluid" >
           <div style={{margin:'50px 0 0 50px'}} >
           {
                auth.user ? <button className="btn btn-primary" onClick={handleSignOut} >Sign out</button> :
                <button className="btn btn-primary" onClick={handleSignIn} >Sign in with google</button>
            } 
           </div>
        </div>
    );
};

export default Login;