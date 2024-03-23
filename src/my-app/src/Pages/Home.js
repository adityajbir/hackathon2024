import React from 'react';
import ReactDOM from 'react-dom'; 

const Home = () =>{
    return(
        <div className='home-container'>
        <h1>Welcome to Home Page</h1>
        <nav>
            <ul>
                <li><Link to="/Calendar">Calendar</Link></li>
                <li><Link to="/Grades">Grades</Link></li>
                <li><Link to="/Tutoring">Tutoring</Link></li>
            </ul>
        </nav>
        </div>
    ) 
}

export default Home;