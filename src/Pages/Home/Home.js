import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';


const Home = () => {
    const {loader,products} = useProducts();
    
    const productClick = () =>{

    }
       
    return (
        <div className='container mt-5'>
            <div>

            </div>

            <div section='products' className='product-showcase'>
                {
                    products.map(product=> 
                        <Link to ={`product-detail/${product.key}`}>
                        <div className='row m-3 ' onClick={productClick}>
                            
                                <div className='col-lg-8'>
                                    <p><b> {product?.name}</b> </p>
                                    <p>Seller: {product?.seller}</p>
                                    <p>Price: {product?.price}</p>
                                    <p>Stock: {product?.stock}</p>
                                </div>
                                <div className='col-lg-4'>
                                    <img src={product?.img} alt="" />
                                </div>
                            
                             <hr />
                        </div>
                        </Link>
                        )
                }
                
            </div>
            
        </div>
    );
};

export default Home;