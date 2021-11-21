import React from 'react';

import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Register from './routes/Register';
import Search from './routes/Search';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route path="about" element={<About />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;