import axios from "axios"
import { useEffect, useState } from "react"


const useUsers = () =>{
    
    
    const [message,setMessage] = useState('')
    const [user, setUser] = useState({})
    const [loginStatus,setLoginStatus] =useState(false)


    // user login function 
    const login = async (email,password) =>{
        axios.post(`http://localhost:8000/login`,{
            email:email,
            password:password
        })
        .then((response)=>{
            setUser(response.data.user)
            setMessage(response.data.message)
            console.log(message)
            console.log(response.data)
            setLoginStatus(true)
        })
        .catch((error)=>{
            setMessage(error.data.message)
            console.log(message)
        })
    }

    //user registration funtion 
    const register = async (username,email,password,role) =>{
        console.log(username,email,password,role)
        console.log('register click')
        axios.post(`http://localhost:8000/register`,{
            username:username,
            email:email,
            password:password,
            role:role
        })
        .then((response)=>{
            setMessage(response.data.message)
            console.log('success'+message)
            console.log(response)
        }
        )
        .catch((error)=>{
            setMessage(error.data.message)
            console.log('error'+message)
        }
        )
    }



    const logout = () =>{
        setLoginStatus(false);
        setUser('')
        setMessage('')
    }

    return{
        login,
        register,
        message,
        user,
        loginStatus,
        logout,
        setMessage
        
    }
}
export default useUsers;
