import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import './login.css'


const Login = () => {
    const {login,user,loginStatus,message} = useUsers()
    let navigate = useNavigate();
    let location = useLocation();


    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        login(data.email, data.password)
        console.log(data)
    };
    const usernameSet = () =>{
        
        setUsername()
    }
    const passwordSet = () =>{

    }
    const loginAddition =() =>{
        login("sajedulislms@gmail.com","12345678");
        if(loginStatus){ 
            const path = navigate(-1)? navigate(-1):'/home' 
            navigate(path )
        }
        console.log(user)

    }
    return (
        <div className='container login-body p-3 mt-3'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <h2 style={{color:'green'}}>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Username</label>
                            <input onChange={usernameSet} type='text'  {...register("username", { required: true })} />
                        </div>

                        <div>
                            <label>Password</label>
                            <input onChange={passwordSet} type='password' {...register("password", { required: true })} />
                        </div>
                        
                        <input onClick={loginAddition} type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;