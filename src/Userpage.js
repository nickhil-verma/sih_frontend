import React from 'react'
import Footer from './components/Footer';
import Quote from './components/Quote';
 import Facts from "./components/Facts"
import Home from './components/Home';
import Navbar from './components/Navbar';
import IIS from './components/IIS';
 
const Userpage = () => {
  return (
    
    <>
        <Navbar/>
        <Home/>
        <IIS/>
        <Facts />
        <Quote/>
        <Footer/>
       
        
        
         
        
    </>
  )
}

export default Userpage