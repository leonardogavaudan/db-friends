import React from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/contacts">CONTACTS</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/register">REGISTER</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;