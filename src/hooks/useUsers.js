import axios from "axios"
import { useEffect, useState } from "react"


const useUsers = () =>{
    
    
    const [message,setMessage] = useState('')
    const [user, setUser] = useState({})
    const [loginStatus,setLoginStatus] =useState(false)


    // user login function 
    const login = (email,password) =>{
        axios.post(`http://localhost:8000/login`,{
            email:email,
            password:password
        })
        .then((response)=>{
            setUser(response.data.user)
            setMessage(response.data.message)
            console.log(message)
            console.log(response)
            setLoginStatus(true)
        })
        .catch((error)=>{
            setMessage(error.data.message)
            console.log(message)
        })
    }

    const logout = () =>{
        setLoginStatus(false);
        setUser('')
    }

    return{
        login,
        message,
        user,
        loginStatus,
        logout
        
    }
}
export default useUsers;
