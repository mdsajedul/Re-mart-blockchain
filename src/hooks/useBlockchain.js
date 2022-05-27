import { useEffect, useState } from "react"

const useBlockchain=()=>{

const [reviewList,setReviewList] = useState([]);
const [reviewPickList,setReviewPickList] = useState([]);

// let reviewPickList =[];


    useEffect(()=>{
        fetch(`http://localhost:8000/miner/getMempoolData`)
        .then(res=>res.json())
        .then(data=>setReviewList(data.reviews))
    })

    

    return {
        reviewList,reviewPickList,setReviewPickList
    }

}

export default useBlockchain;