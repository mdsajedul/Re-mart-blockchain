import { createContext } from "react";
import useUsers from "../hooks/useUsers";

export const UserContext = createContext();

const UserProvider = ({children}) =>{
    
    const allContext = useUsers();

    return(
        <UserContext.Provider value={allContext}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;