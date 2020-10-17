import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../logos/Group 1329.png';
import { useAuth } from '../Login/UseAuth';


const Header = () => {
    const auth= useAuth();
    return (
        <div style={{padding:'15px'}} className="row">
            <div style={{paddingLeft:'35px'}} className="col-md-4">
               <Link to="/" >
                 <img style={{width:'220px'}} src={logo} alt=""/>
               </Link>
            </div>
            <div  className=" link-right col-md-8">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <Link to="/" class="nav-link" >Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" >Donation</Link>
                    </li>
                    
                    <li class="nav-item">
                        <Link class="nav-link">Blog</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/regEvents" class="bg-primary text-white nav-link">Register</Link>
                    </li>
                    <li style={{marginLeft:'15px'}} class="nav-item">
                        <Link to="/admin" class="bg-dark text-white nav-link">Admin</Link>
                    </li>
                    <li style={{marginLeft:'15px'}}
                       className="nav-item" 
                    >
                        {
                            auth.user ? <Link class="bg-secondary text-white  nav-link" to="/login" ><span>Sign Out</span></Link> :
                            <Link class="bg-secondary text-white  nav-link" to="/login" >
                               <span>Sign In</span>
                            </Link>
                        }
                    </li>
                    <li>
                    {
                        auth.user && <span className='text-primary' style={{marginLeft:'10px ',fontSize:'20px'}} >{auth.user.name} </span>
                    }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;