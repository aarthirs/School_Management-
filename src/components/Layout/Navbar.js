import React from 'react';

const Navbar = ({ loggedIn, userType, onLogout }) => {
    return (
        <nav>
            <ul>
                <li>{loggedIn ? `Logged in as ${userType}` : 'Not logged in'}</li>
                {loggedIn && <li><button onClick={onLogout}>Logout</button></li>}
            </ul>
        </nav>
    );
};

export default Navbar;
