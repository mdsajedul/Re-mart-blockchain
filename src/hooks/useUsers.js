import axios from "axios"
import { useEffect, useState } from "react"
import io from "socket.io-client";

const useUsers = () =>{
    
    
    const [message,setMessage] = useState('')
    const [user, setUser] = useState({})
    const [loginStatus,setLoginStatus] =useState(false)
    // const [socket,setSocket] = useState();


    const socket = io.connect("http://localhost:8000");

    const login = (email,password) =>{

        axios.post(`http://localhost:8000/login`,{
            email:email,
            password:password
        })
        .then((response)=>{
            setUser(response.data.user)
            setMessage(response.data.message)
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
        logout,
        socket
    }
}
export default useUsers;
