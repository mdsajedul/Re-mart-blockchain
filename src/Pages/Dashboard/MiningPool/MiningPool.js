import React, { useEffect, useState } from 'react';
import useSocketContext from '../../../hooks/useSocketContext';
import ScrollToBottom from 'react-scroll-to-bottom';


const MiningPool = () => {

    const {socket} = useSocketContext()
    // const [reviewList,setReviewList] = useState([]);
    var [reviewList, setReviewList] = useState([])
    var [reviewListLocal,setReviewListLocal]=useState([])

    useEffect(()=>{
        socket.on('receive_reviews',(data)=>{
            console.log(data)
            // console.log(socket.id)
            // reviewListLocal.push(data)
            // localStorage.setItem('reviewList',JSON.stringify(reviewListLocal))
            setReviewList((list)=>[...list,data]);
        })
    },[])

    localStorage.setItem('reviewList',JSON.stringify(reviewList))

    useEffect(()=>{
        const getReveiw=  localStorage.getItem('reviewList')
        setReviewListLocal(JSON.parse(getReveiw));
    },[])
    console.log(reviewList.length)
    
    return (
        <div>
            <h2>Mining Pool</h2>
            <div>
                {
                    reviewList.map(review=>{
                        return (
                        <ScrollToBottom>
                        <div key={review.username} className='row gx-0'>
                            <div className='col-lg-9'>
                                <p>{review?.username}</p>
                                {/* <p>{review.reviewData.rating}</p>
                                <p>{review.reviewData.review}</p>
                                <p>{review.reviewData.product_id}</p> */}
                            </div>
                            <div className='col-lg-3'>
                                <button >Add</button>
                            </div>
                                    
                             <hr />
                        </div>
                        </ScrollToBottom>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MiningPool;