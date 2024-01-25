import React from 'react';
import './listing.scss'

const Listing = ({ tasks, onDelete }) => {
  
  return (
    <div className='app'>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.name}</span>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Listing;

