import React from 'react';

function Tutoring() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '20px' // Space between each Tutoring component
    }}>
      {[...Array(3)].map((_, index) => (
        <div key={index}>
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
                src="user.png"
                alt="User"
                style={{ width: '100px', height: '100px' }}
              />
            </div>
            <div style={{ flex: '1', width: '100%' }}>
              <h2>ECEN 214 Tutor</h2>
              <p>Ipsom Lorum</p>
            </div>
          </div>
          {/* Container for time availability */}
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(255, 255, 255, 0.7)', 
            padding: '10px',
            borderRadius: '10px',
            marginTop: '-10px' // Negative margin to remove gap between profile and available times
          }}>
            <h3>Available Times</h3>
            <p>Monday: 9:00 AM - 5:00 PM</p>
            <p>Tuesday: 9:00 AM - 5:00 PM</p>
            {/* Add more days and times as needed */}
            <div style={{ marginLeft: 'auto' }}>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginTop: '10px' // Add some space between the times and button
                }}
              >
                Make an appointment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tutoring;
