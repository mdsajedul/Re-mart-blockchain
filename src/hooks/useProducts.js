import { useEffect, useState } from "react"

const useProducts = ()=>{
    const [products,setProducts] = useState([]);
    const [loader,setLoader] = useState(false);

    useEffect(()=>{
        setLoader(true);
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoader(false)
        })
        
    },[])

    return{
        products,
        loader
    }
}
export default useProducts;