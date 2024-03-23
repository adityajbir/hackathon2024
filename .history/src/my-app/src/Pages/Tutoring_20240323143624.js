import React from 'react';
import ReactDOM from 'react-dom'; 

function Tutoring(){
    <div style={{ 
        display: 'flex', 
        flexDirection: 'row', // Change to row to align items horizontally
        alignItems: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        padding: '10px',
        borderRadius: '10px'
      }}>
        <div style={{ marginRight: '20px' }}>
          <img
            src="default-icon.jpg" // Replace 'default-icon.jpg' with your actual image URL
            alt="Default Icon"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <div style={{ flex: '1', width: '100%' }}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    ;
  
}


export default Tutoring;