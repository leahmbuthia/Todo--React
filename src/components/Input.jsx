import React, { useState } from 'react'
import './input.scss'
import Listing from './Listing'
import Footer from './Footer'

const Input = () => { 
    const [todo,setTodo]=useState([
        {
            id: 0,
            name:'leah Nyambura say hello',
            completed:false,
        },
        {
            id: 1,
            name:'leah Nyambura say hello', 
            completed:false,   
        }
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, { id: todo.length, name: e.target[0].value }]) 
        console.log(todo);
        e.target[0].value = '';
    }
    const handleDelete = (taskId) => {
        const updatedTodo = todo.filter(task => task.id !== taskId);
        setTodo(updatedTodo);
    }

    
  return (
    <div className='input'>
        <form onSubmit={handleSubmit}>  
        <input type="text" placeholder='Create a todo' />
        <button type="submit"></button>
        </form>

        <Listing tasks={todo} onDelete={handleDelete}/>
       

    </div>
    
  )
}

export default Input