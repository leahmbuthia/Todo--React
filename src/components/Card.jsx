import React from 'react'
import './card.scss'
import Todo from './Todo'
import Input from './Input'
import Listing from './Listing'
import Footer from './Footer'

const Card = () => {
  return (
    <>
      <div className='todo'>
      <Todo/> 
      <Input/> 
      <Footer/>
      
      {/* <Listing/>  */}
      </div>
       

    </>

  )
}

export default Card