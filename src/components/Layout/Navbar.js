import React from 'react';
import './index.css'

const Navbar = ({ loggedIn, userType, onLogout }) => {
    return (
        <nav className="navbar">
            <ul>
                <li>{loggedIn ? `Logged in as ${userType}` : 'Not logged in'}</li>
                {loggedIn && <li><button onClick={onLogout}>Logout</button></li>}
            </ul>
        </nav>
    );
};

export default Navbar;
