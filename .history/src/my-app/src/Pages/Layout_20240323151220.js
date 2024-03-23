import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="App-header">
                <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginRight: '20px' }}><Link to="/Home">Home</Link></li>
                    <li style={{ marginRight: '20px' }}><Link to="/CalendarPage">Calendar</Link></li>
                    <li style={{ marginRight: '20px' }}><Link to="/Grades">Grades</Link></li>
                    <li style={{ marginRight: '20px' }}><Link to="/Tutoring">Tutoring</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;
