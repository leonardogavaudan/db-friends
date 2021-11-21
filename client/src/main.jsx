import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import About from './routes/About';
import Login from './routes/Login';
import Register from './routes/Register';
import Search from './routes/Search';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="about" element={<About />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>
        </Routes>
    </Router>
    , document.getElementById('root')
);
