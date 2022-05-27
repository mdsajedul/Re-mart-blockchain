import { useContext } from "react"
import { BlockchainContex } from "../contexts/BlockchainProvider"

const useBlockchainContext = () => {
    
    return useContext(BlockchainContex)
}

export default useBlockchainContext;