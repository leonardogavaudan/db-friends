import React from 'react';

import './App.css'

import Navbar from './components/Navbar';
import Heading from './components/Heading';

import { Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

const App = () => {
	return (
		<Container>
			<Heading />
			<Navbar />

			<Typography variant="h1"></Typography>
		</Container>
	);
};

export default App;