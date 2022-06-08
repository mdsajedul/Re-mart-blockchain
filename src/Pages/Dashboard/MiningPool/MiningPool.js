import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ReviewCard from '../ReviewCard.js/ReviewCard';
import { css } from '@emotion/css';
import useBlockchainContext from '../../../hooks/useBlockchainContext';
import axios from 'axios';
import useSocketContext from '../../../hooks/useSocketContext';








const MiningPool = () => {

    const [localData,setLocalData] = useState([])
    
    const {socket} = useSocketContext()


    const {reviewList, mineResult, loading, message, reviewPickList,setLoading,setMineResult,setMessage,setReviewPickList,setReviewList} = useBlockchainContext()
    
    useEffect(()=>{
        
        console.log(mineResult.Block)
        setLocalData(mineResult.Block)
        console.log(reviewPickList)
        localStorage.setItem('blocks',JSON.stringify(localData))
        console.log(localData)

    },[mineResult,reviewPickList,localData])


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

                console.log('New Review List')
                console.log(reviewPickList)

                const newReviewList = reviewList.filter(({reviewId: id1})=> !reviewPickList.some(({reviewId : id2})=> id2 === id1) )
                
                axios.post(`http://localhost:8000/miner/deleteReview`,{
                    data:newReviewList
                })

                // setReviewList(...newReviewList);
                console.log(newReviewList)
            })
            .catch((error)=>{
                console.log(error)
            })


        // socket.emit('mine_block',reviewPickList)

        }
        else{
            setMessage('Please pick reviews');
        }

        setReviewPickList([])
    }


    // const localData = localStorage.getItem('blocks');
    // console.log('Local data : '+localData)

    const ROOT_CSS = css({
        height: 400,
       
      });
      
    
    return (
        <div>
            <div className='row gx-0 my-4 py-3  '>
                <div className="col-lg-6">
                    <h2>Mining Pool</h2>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <button className='btn btn-primary' onClick={mineBlock} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Mine Block</button>
                </div>
            </div>
            <div>
            <ScrollToBottom className={ROOT_CSS}>
                {
                    reviewList.map(review=>{
                        return (
                        <div key={review.reviewId} className='row gx-0'>
                            <ReviewCard review={review} key={review.reviewId}/>
                             <hr />
                        </div>
                       
                        )
                    })
                }
                </ScrollToBottom>
            </div>


                {/* Modal  */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Mining Block</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {
                                loading ? 
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border me-3" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <h3 >Mining Block</h3>
                                </div>
                                :
                                <div className='d-flex justify-content-center'>
                                    <h3>{message}</h3>
                                </div>

                            }
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default MiningPool;