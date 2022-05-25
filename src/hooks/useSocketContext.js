import { useContext } from "react"
import { SocketContext } from "../contexts/SocketProvider";

const useSocketContext=()=>{

    return useContext(SocketContext)
}

export default useSocketContext;