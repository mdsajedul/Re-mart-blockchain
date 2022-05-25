import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';
import './login.css'


const Login = () => {
    let navigate = useNavigate();


    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {login,user,loginStatus} = useUserContext()
   
    const loginAddition =(e) =>{
        e.preventDefault()
        console.log(username)
        console.log(password)
        login(username,password);
       

    }

    useEffect(()=>{
        if(loginStatus){
            const path = navigate(-1)? navigate(-1):'/home' 
            navigate(path)
        }
    },[loginStatus])

    return (
        <div className='container login-body p-3 mt-3'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 style={{color:'green'}}>Login</h2>
                    <form>
                        <div>
                            <label>Username</label>
                            <input onChange={(event)=>{
                                setUsername(event.target.value)
                            }} type='text' />
                        </div>

                        <div>
                            <label>Password</label>
                            <input onChange={(event)=>{
                                setPassword(event.target.value)
                            }} type='password' />
                        </div>
                    </form>
                    <button className='login-btn' onClick={loginAddition} >Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;