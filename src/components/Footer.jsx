import React from 'react';
import './footer.scss'; // Import your footer styles here

const Footer = () => {
    // const totalTasks = tasks.length;
    // const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className='footer'>
            {/* <h4>{`Items left: ${totalTasks - completedTasks}`}</h4> */}
            {/* <div className='filter-container'>
                <h4 className='filter'>All</h4>
                <h4 className='filter'>Completed</h4>
                <h4 className='filter'>Clear Completed</h4>
                <h4>Active</h4>
            </div> */}

        <h4>Items left</h4>
        <h4>All</h4>
        <h4>Active</h4>
        <h4>Completed</h4>
        <h4>Clear Completed</h4>
    </div>
    
    );
}

export default Footer;
