import { useEffect, useState } from "react"

const useUsers = () =>{
    
    const [users,setUsers] = useState([])
    const [message,setMessage] = useState('')
    const [user, setUser] = useState({})
    const [loginStatus,setLoginStatus] =useState('false')

    useEffect(()=>{
        fetch('/users.json')
        .then(res=>res.json())
        .then(data=>{
            setUsers(data)
        })
    },[])

    const login = (email,password) =>{
        console.log(email,password)
         const result =  users.find(user=>user.email === email )
         if(result?.password===password){
            setMessage('Login Successful');
            setUser(result)
            setLoginStatus(true)
         }
         console.log(result);
    }

    return{
        users,
        login,
        message,
        user,
        loginStatus
    }
}
export default useUsers;
