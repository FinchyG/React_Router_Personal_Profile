import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return(
        <div>
            <NavLink to="/" className="link">Profile</NavLink>
            <NavLink to="/travel" className="link">Travel</NavLink>
            <NavLink to="/walking" className="link">Walking</NavLink>
            <NavLink to="/reading" className="link">Reading</NavLink>
        </div>
    );
}

export default Navigation;