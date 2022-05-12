import { useContext } from "react"
import { UserContext } from "../contexts/UserProvider"

const useUserContext=()=>{

    return useContext(UserContext)
}

export default useUserContext;