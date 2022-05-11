
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation';
import { useEffect, useState } from 'react';
import introGif from './Assets/gif/intro-2.gif'
// import useProducts from './hooks/useProducts';

function App() {
  // const {loader} = useProducts();
  const [loader,setLoader] =useState(true)

    // setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },1000)
  
  return (
    
    <div >

      {
        loader ? 

        <div className='d-flex justify-content-center align-items-center'>
          <img className='' src={introGif} alt="" />
        </div> 
        :
        <BrowserRouter>
        <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            {/* <Route path="about" element={<About />} /> */}
          </Routes>
        </BrowserRouter>
      }
      

    </div>
  );
}

export default App;
