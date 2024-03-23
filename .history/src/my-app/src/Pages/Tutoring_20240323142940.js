import React from 'react';
import ReactDOM from 'react-dom'; 

function Tutoring(){
    return(
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}

function BoxWithIcon({ title, description }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
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
    );
  }
  
export default Tutoring;