import axios from "axios";
import { useEffect, useState } from "react"

const useBlockchain=()=>{

const [reviewList,setReviewList] = useState([]);
const [reviewPickList,setReviewPickList] = useState([]);
const [loading,setLoading] = useState(false)
const [mineResult,setMineResult] = useState([])
const [message,setMessage] = useState('')

// let reviewPickList =[];


    useEffect(()=>{
        fetch(`http://localhost:8000/miner/getMempoolData`)
        .then(res=>res.json())
        .then(data=>setReviewList(data.reviews))
    })

    const mineBlock=()=>{
        
        if(reviewPickList.length > 0 ){
            setLoading(true)
            axios.post(`http://localhost:8000/miner/mine`,{
                data: reviewPickList
            })
            .then((response)=>{
                setMineResult(response.data)
                setMessage(response.data.message)
                setLoading(false)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        else{
            setMessage('Please pick reviews');
        }
    }

    return {
        reviewList,reviewPickList,setReviewPickList, mineBlock, mineResult, loading,message
    }

}

export default useBlockchain;