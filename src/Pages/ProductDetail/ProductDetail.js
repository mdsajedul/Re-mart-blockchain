import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import useUserContext from '../../hooks/useUserContext';


const ProductDetail = () => {
   
    const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(false);
    const [buyStatus,setBuyStatus] =useState(false)
    const [yourRating,setYourRating] = useState(0);
    const [yourReview,setYourReview] = useState('')
    const [reviewMessage,setReviewMessage] = useState('Please buy product for review')
    const {productId} = useParams()
    const {loginStatus,user} = useUserContext()

    let navigate = useNavigate()
    
    

    useEffect(()=>{
        setLoader(true);
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            const result = data.find( o=> o.key === productId);
            setProduct(result);
        })
        
    },[productId])


    const buyButton =()=>{
        console.log(user)
        console.log(loginStatus)
        if(loginStatus===false){
            navigate('../../login')
        }
        else{
            setBuyStatus(true);
        }
    }

    const ratingChanged =(value)=>{
        setYourRating(value)
    }



// all value for blockchain submit from submit review function 


    const submitReview = () =>{
        setBuyStatus(false)
        console.log(buyStatus)
        console.log(yourRating)
        console.log(yourReview)
        setReviewMessage('Thanks for sunmitting review')
    }

    const featureFound = (product?.features?.length > 0) ? true: false

    return (
        <div className='container p-4'>
            <div>
                <h4>Product Detail</h4>
                <div className='row pt-5'>
                    <div className='col-lg-4'>
                        <img  src={product?.img} alt="" /> <br />
                        
                        <button onClick={buyButton} className='btn btn-primary w-100 p-2 mt-5'>Buy Now</button>
                    </div>
                    <div className='col-lg-8'>
                        <p>{product?.name}</p>
                        <p>Price: {product?.price}</p>
                        <p>{product?.features?.length}</p>
                        <p>Shipping cost: {product?.shipping}</p>
                        {
                            featureFound ?
                            <div>
                            <h4>Features</h4>
                            {
                                product?.features.map(feature=> <li>{feature.description} : {feature.value}</li>)
                            }
                        </div>
                        :
                        <p>Features not listed</p>
                        }
                       
                    </div>
                </div>
                <hr />

{/* 
    here Rating value will be the avg value of all rating
    will come from blockchain  
*/}

                <div className='pt-3'>
                    <h5>Ratings and Reviews of {product?.name}</h5>

                    <div className='p-3'>

                        <h1>4.4/5</h1>
                        <ReactStars
                            value={4.5}
                            edit={false}
                            isHalf={true}
                            count={5}
                            // onChange={ratingChanged}
                            size={26}
                            color2={'#ffd700'} 
                        />
                        <p>Total Rating: 10</p>
                    </div>


{/* 
    Review Section
    Map function needed for iteration for all reviews 
    Reviews and rating api will come from blockchain 
*/}
                    <div className='p-3'>
                        <h5>Product Reviews</h5>
                        <hr />
                        <ReactStars
                            value={4.5}
                            edit={false}
                            isHalf={true}
                            count={5}
                            // onChange={ratingChanged}
                            size={16}
                            color2={'#ffd700'} 
                        />
                        <p><b>Person Name</b></p>
                        <p>This is best product i ever used</p>
                        <hr />
                    </div>

{/* writing rating review */}

                    {
                        buyStatus && loginStatus ?  
                            <div>
                                <h4>Leave a Review</h4>
                                <form>
                                <ReactStars
                                    isHalf={true}
                                    count={5}
                                    onChange={ratingChanged}
                                    size={28}
                                    color2={'#ffd700'} 
                                />
                                <textarea onChange={(event)=>{
                                    setYourReview(event.target.value)
                                }} rows="4" cols="50">
                                    Write your review
                                </textarea>
                                </form>

                                <button onClick={submitReview}>Submit</button>
                            </div>
                        :
                        <div>
                            <p>{reviewMessage}</p>
                            <p></p>
                        </div>
                       
                    }

                    

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;