import React from 'react';

import './App.css'

import Navbar from './components/Navbar';
import Heading from './components/Heading';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const App = () => {
	return (
		<Container>
			<Heading />
			<Navbar />

			<Typography variant="h1"> </Typography>
		</Container>
	);
};

export default App;