import React from 'react';
import ReactDOM from 'react-dom'; 

function Tutoring(){
    return(
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '10px' }}>
                <img
                    src="default-icon.jpg" // Replace 'default-icon.jpg' with your actual image URL
                    alt="Default Icon"
                    style={{ width: '100px', height: '100px' }}
                />
                </div>
                    <div style={{ flex: '1', width: '100%' }}>
                    <h2>Title</h2>
                    <p>Description</p>
                </div>
            </div>

        </div>
    );
}


export default Tutoring;