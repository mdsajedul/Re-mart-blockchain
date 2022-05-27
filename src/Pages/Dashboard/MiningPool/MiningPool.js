import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ReviewCard from '../ReviewCard.js/ReviewCard';
import { css } from '@emotion/css';
import useBlockchainContext from '../../../hooks/useBlockchainContext';




const MiningPool = () => {


    const {reviewList} = useBlockchainContext()



    const ROOT_CSS = css({
        height: 400,
       
      });
      
    
    return (
        <div>
            <h2>Mining Pool</h2>
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