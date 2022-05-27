import React, { useEffect, useState } from 'react';
import useBlockchainContext from '../../../hooks/useBlockchainContext';
import useUserContext from '../../../hooks/useUserContext';


const ReviewCard = ({review}) => {
    const [disabled,setdisabled] = useState(false);

    const {loginStatus,user} = useUserContext()
    const {reviewPickList, setReviewPickList} = useBlockchainContext()


    const pickReview =(data)=>{
        setdisabled(true)
        setReviewPickList(list=>[...list, data])
    }

    useEffect(()=>{
        console.log(reviewPickList)
    },[reviewPickList])

    useEffect(()=>{
        if(user.username === review.username){
            setdisabled(true)
        }
        else setdisabled(false)
    },[user.username,review.username])

    // console.log(reviewPickList)

    return (
        <>
            <div class="accordion accordion-flush col-lg-9" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id={`flush-heading${review.reviewId}`}>
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${review.reviewId}`} aria-expanded="false" aria-controls={`flush-collapse${review.reviewId}`}>
                        {review.reviewData.substr(1,40)}...
                    </button>
                    </h2>
                    <div id={`flush-collapse${review.reviewId}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${review.reviewId}`} data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                           <p>{review.username}</p>
                           <p>Review ID: {review.reviewId}</p>
                           <p>Body: {review.reviewData.substr(1,50)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-lg-3 d-flex align-items-center justify-content-center'>
                <button className='btn btn-primary' disabled={disabled} onClick={()=>{pickReview(review)}}>Add</button>
            </div>
        </>
    );
};

export default ReviewCard;