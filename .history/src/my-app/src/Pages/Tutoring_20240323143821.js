import React from 'react';

function Tutoring() { // Add props for title and description
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
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
        <h2>title</h2> {/* Use props.title to display the title */}
        <p>desc.</p> {/* Use props.description to display the description */}
      </div>
    </div>
     <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
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
          <h2>title</h2> {/* Use props.title to display the title */}
          <p>desc.</p> {/* Use props.description to display the description */}
        </div>
      </div>
  );
}

export default Tutoring;
