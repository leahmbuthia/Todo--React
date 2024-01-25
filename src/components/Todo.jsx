import React from 'react'
import Moon from '../assets/icon-moon.svg'
import './todo.scss'


const Todo = () => {
  return (
    <div className='moon'>
        <h1>TODO</h1> 
       <button type='submit' ><img src={Moon} alt="" /></button>
       
    </div>
  )
}

export default Todo