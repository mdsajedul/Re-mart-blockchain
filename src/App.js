
import './App.css'
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation';
import { useState } from 'react';
import introGif from './Assets/gif/intro-2.gif'
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Login from './Pages/Login/Login';
import UserProvider from './contexts/UserProvider';
import SocketProvider from './contexts/SocketProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute';
import BlockchainProvider from './contexts/BlockchainProvider';
import NotFound from './Pages/Shared/NotFound';

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
        <SocketProvider>
        <BlockchainProvider>
          <BrowserRouter>
            <Navigation></Navigation> 
              <Routes>
                <Route path='*' element={<NotFound/>}/>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/product-detail/:productId" element={<ProductDetail/>}></Route>
                <Route path="/home/product-detail/:productId" element={<ProductDetail/>}></Route>
                <Route path="login" element={<Login/>} />
                <Route path="/dashboard/*" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              </Routes>
            </BrowserRouter>
        </BlockchainProvider>
        </SocketProvider>
        </UserProvider>
      }
      

    </div>
  );
}

export default App;
