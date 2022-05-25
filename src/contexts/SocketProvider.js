import { createContext } from "react";
import useSocket from "../hooks/useSocket"

export const SocketContext = createContext();

const SocketProvider = ({children}) =>{

    const allContext = useSocket();

    return(
        <SocketContext.Provider value={allContext}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;