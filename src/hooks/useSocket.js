import { io } from "socket.io-client";

const useSocket =()=>{
    const socket = io.connect("http://localhost:8000");

    return {socket};
}
export default useSocket;