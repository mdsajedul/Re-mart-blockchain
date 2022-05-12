
import './App.css'
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation';
import { useState } from 'react';
import introGif from './Assets/gif/intro-2.gif'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Login from './Pages/Login/Login';
import UserProvider from './contexts/UserProvider';

function App() {

  const [loader,setLoader] =useState(true)

 
    setTimeout(()=>{
      setLoader(false)
    },1000)
  
  return (
    
    <div className=''>

      {
        loader ? 

        <div className='App-logo d-flex justify-content-center align-items-center'>
              <img  src={introGif} alt="" width='200px' height='200px'/>
        </div> 
        :
        <UserProvider>
          <BrowserRouter>
            <Navigation></Navigation>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/product-detail/:productId" element={<ProductDetail/>}></Route>
                <Route path="/home/product-detail/:productId" element={<ProductDetail/>}></Route>
                <Route path="login" element={<Login/>} />
              </Routes>
            </BrowserRouter>
        </UserProvider>
      }
      

    </div>
  );
}

export default App;
