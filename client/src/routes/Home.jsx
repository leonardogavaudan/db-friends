import React from "react";

import { Typography, Container } from '@material-ui/core';

import { Outlet } from "react-router";

import Navbar from '../components/Navbar';
import Heading from '../components/Heading';

const Home = () => {
    return (
        <Container>
            <Heading />
            <Navbar />

            <Typography variant="h1"></Typography>

            <Outlet />
        </Container>
    );
};

export default Home;