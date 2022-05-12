import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './navigation.css'
import logo from '../../Assets/icons/re-mart.svg';
import { Link } from 'react-router-dom';

const Navigation = () => {
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
                    <Link to="login" className='btn btn-primary '>Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;