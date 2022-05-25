import { useEffect, useState } from "react";
import { io } from "socket.io-client";


const useSocket =()=>{
    const [socket,setSocket] = useState(null)
    useEffect(()=>{
        const newSocket = io.connect("http://localhost:8000");
        setSocket(newSocket)
    },[])

    return {socket};
}
export default useSocket;