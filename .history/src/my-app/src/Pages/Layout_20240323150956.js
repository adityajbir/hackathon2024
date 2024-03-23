import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return(
        <>

        <nav className = "App-header">


            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/CalendarPage">Calendar</Link></li>
                <li><Link to="/Grades">Grades</Link></li>
                <li><Link to="/Tutoring">Tutoring</Link></li>
            </ul>
        </nav>
        <div className='footer'>
            <h1>Copyright @2024</h1>
        </div>


        <Outlet />
        </>
    ) 
}

export default Layout;
