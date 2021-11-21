import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="#">CONTACTS</Link>
                </li>
                <li>
                    <Link to="#">ABOUT</Link>
                </li>
                <li>
                    <Link to="#">LOGIN</Link>
                </li>
                <li>
                    <Link to="/register">REGISTER</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;