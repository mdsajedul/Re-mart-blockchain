import { createContext } from "react";
import useBlockchain from "../hooks/useBlockchain";

export const BlockchainContex = createContext();

const BlockchainProvider = ({children}) =>{

    const allContext = useBlockchain();

    return(
        <BlockchainContex.Provider value={allContext} >
            {children}
        </BlockchainContex.Provider>
    )

}

export default BlockchainProvider;