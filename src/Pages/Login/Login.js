import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../hooks/useUserContext';
import './login.css'


const Login = () => {
    let navigate = useNavigate();


    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [rePassword,setRePassword] = useState('')
    const [email,setEmail] = useState('')
    const [role,setRole] = useState('')
    const [errMsg,setErrorMsg] = useState('')
    const [error,setError] = useState(false)
    const {login,user,loginStatus,register,message,setMessage} = useUserContext()
    const [loginPage,setLoginPage] = useState(true)
   
    const loginAddition =(e) =>{
        e.preventDefault()
        if(username!=='' && password!==''){
            if(username.length>=5 && password.length>=8){
                login(username,password)
            }
            else{
                setErrorMsg('Authentication failed!')
                setError(true)
            }
        }
        else{
            setErrorMsg('Please fill all the fields')
            setError(true)
        }
    }

    const registrationAddition=(e)=>{
        e.preventDefault()
        if(username!=='' && password!=='' && rePassword!=='' && email!=='' && role!==''){
            if(username.length>=5){
                if(password.length>=8){
                    if(password===rePassword){
                        register(username,email,password,role)
                        if(message!==''){
                            setError(true)
                            setErrorMsg(message)
                        }
                        else{
                            setError(false)
                            setErrorMsg('')
                            setLoginPage(false)
                        }
                    }
                    else{
                        setErrorMsg('Password does not match')
                    }
                }
                else{
                    setError(true)
                    setErrorMsg('Password should be at least 8 chars')
                }
            }
            else{
                setError(true)
                setErrorMsg('Username should be at least 5 chars')
            }
        }
        else{
            setError(true)
            setErrorMsg('Please fill all the fields')
        }
        // setErrorMsg('')
    }

    const pageChange = (page) =>{
        if(page==='login'){
            setLoginPage(true)
            setError(false)
            setErrorMsg('')
            setMessage('')
        }
        else{
            setLoginPage(false)
            setError(false)
            setErrorMsg('')
            setMessage('')
        }
    }
    
    useEffect(()=>{
        
            if(user && loginStatus){
                console.log(user,loginStatus)
                const path = navigate(-1)? navigate(-1):'/home' 
                navigate(path)
            }
    
    },[loginStatus,user,navigate])

    return (
        <div className='container login-body p-3 mt-3'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    {
                        loginPage?
                        <div>
                             <h2 style={{color:'green'}}>Login</h2>
                             {
                            message && <p className='bg-info text-white p-2 rounded text-primary'>{message}</p>
                           }
                             {
                            error===true && <p className='bg-warning text-white p-2 rounded text-primary'>{errMsg}</p>
                           }
                            <label className='d-flex justify-content-end' onClick={()=>pageChange('register')} style={{color:'blue',cursor:'pointer'}}>Create account?</label>
                        </div> 
                        :
                        <div>
                           <h2 style={{color:'green'}}>Registration</h2>
                           {
                            message && <p className='bg-info text-white p-2 rounded text-primary'>{message}</p>
                           }
                           {
                            error===true && <p className='bg-warning text-white p-2 rounded text-primary'>{errMsg}</p>
                           }
                           
                           <label  className='d-flex justify-content-end' onClick={()=>pageChange('login')} style={{color:'blue',cursor:'pointer'}}>Already have an account?</label>
                        </div>
                    }

                    
                    <form>
                        <div>
                            <label>Username</label>
                            <input onChange={(event)=>{
                                setUsername(event.target.value)
                            }} type='text' />
                        </div>

                        {
                            loginPage===false && <div>
                                <label>Email</label>
                                <input onChange={(event)=>{
                                setEmail(event.target.value)
                                }} type='text' />
                            </div>
                        }

                        <div>
                            <label>Password</label>
                            <input onChange={(event)=>{
                                setPassword(event.target.value)
                            }} type='password' />
                        </div>

                        {
                            loginPage===false && 
                            <div>
                            <label>Re-Password</label>
                            <input onChange={(event)=>{
                                setRePassword(event.target.value)
                            }} type='password' />
                        </div>
                        }

                        {
                            loginPage===false && <div>
                               <select onChange={(event)=>{setRole(event.target.value)}} className="form-select" aria-label="Default select example">
                                        <option defaultValue='user' value="user">User</option>
                                        <option value="miner">Miner</option>
                                    </select>
                            </div>
                        }
                    </form>
                    {
                        loginPage?  <button className='login-btn' onClick={loginAddition} >Login</button> :
                                    <button className='login-btn' onClick={registrationAddition} >Registration</button>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Login;