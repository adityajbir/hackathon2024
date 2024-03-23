import React from 'react';

function Tutoring() {
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
          src="user.png"
          alt="User"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '1', width: '100%' }}>
        <div>
          <h2>ECEN 214 Tutor</h2>
          <p>Ipsom Lorum</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Make an appointment
          </button>
        </div>
      </div>
            <div style={{ marginRight: '20px' }}>
        <img
          src="user.png"
          alt="User"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '1', width: '100%' }}>
        <div>
          <h2>ECEN 214 Tutor</h2>
          <p>Ipsom Lorum</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Make an appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tutoring;
