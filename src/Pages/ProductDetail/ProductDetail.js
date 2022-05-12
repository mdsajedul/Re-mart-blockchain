import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const ProductDetail = () => {
   
    const [product,setProduct] = useState([]);
    const [loader,setLoader] = useState(false);
    const {productId} = useParams()
    
    

    useEffect(()=>{
        setLoader(true);
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            const result = data.find( o=> o.key === productId);
            setProduct(result);
        })
        
    },[productId])

    const featureFound = (product?.features?.length > 0) ? true: false

    return (
        <div className='container p-4'>
            <div>
                <h4>Product Detail</h4>
                <div className='row pt-5'>
                    <div className='col-lg-4'>
                        <img  src={product?.img} alt="" /> <br />
                        <button className='btn btn-primary w-100 p-2 mt-5'>Buy Now</button>
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




                </div>
            </div>
        </div>
    );
};

export default ProductDetail;