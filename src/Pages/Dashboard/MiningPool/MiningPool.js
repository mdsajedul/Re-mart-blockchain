import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ReviewCard from '../ReviewCard.js/ReviewCard';
import { css } from '@emotion/css';
import useBlockchainContext from '../../../hooks/useBlockchainContext';
import axios from 'axios';




// const {reviewPickList} = useBlockchainContext()





const MiningPool = () => {


    const {reviewList,reviewPickList} = useBlockchainContext()

    const mineBlock=()=>{
        axios.post(`http://localhost:8000/miner/mine`,{
            data: reviewPickList
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }



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
                    <button className='btn btn-primary' onClick={mineBlock} >Mine Block</button>
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
        </div>
    );
};

export default MiningPool;