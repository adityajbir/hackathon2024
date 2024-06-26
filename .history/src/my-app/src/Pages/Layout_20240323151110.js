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
       


        <Outlet />
        </>
    ) 
}

export default Layout;
