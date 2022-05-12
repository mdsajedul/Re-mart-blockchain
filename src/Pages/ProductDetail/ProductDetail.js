import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    console.log(featureFound)

     console.log(product?.features?.length)


    return (
        <div className='container p-4'>
            <div>
                <h4>Product Detail</h4>
                <div className='row pt-5'>
                    <div className='col-lg-4'>
                        <img src={product?.img} alt="" />
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
            </div>
        </div>
    );
};

export default ProductDetail;