import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './navigation.css'
import logo from '../../Assets/icons/re-mart.svg';
import { Link } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';
import useSocketContext from '../../hooks/useSocketContext';

const Navigation = () => {
    
    const {loginStatus,logout,user} = useUserContext()
    const {socket} = useSocketContext()
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand"  href="/">
                  <img src={logo} alt="" width="70" height="" class="d-inline-block align-text-top"/>
                    </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div className='btn-container'>
                                <HashLink className='btn-nav' to="/home">Home</HashLink>
                            </div>
                        </li>
                    </ul>
                    <div>
                        {
                            loginStatus && user? (
                            <div className='d-flex align-items-baseline'>
                                <p className='me-3' style={{color:"#666666"}}>Hello <span style={{color:'#206020'}}>{user?.username}</span></p>
                                {
                                    user?.role==='miner' && <HashLink className='btn-nav me-3' to="/dashboard">Dashboard</HashLink>
                                }
                                <button className='btn btn-danger' onClick={()=>{logout()}}>Logout</button>
                            </div>
                            ) :
                            <Link to="login" className='btn btn-primary '>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;