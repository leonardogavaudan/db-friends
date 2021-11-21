import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
    <Router>
        <Routes>
            {/* <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            /> */}

            <Route path="/" element={<App />} />

            {/* <Route path="/about" element={About} />
            <Route path="/register" element={Register} />
            <Route path="/login" element={Login} /> */}
        </Routes>
    </Router>
    , document.getElementById('root')
);
