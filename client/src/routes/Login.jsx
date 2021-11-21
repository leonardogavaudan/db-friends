import React from 'react';

import { Button } from '@material-ui/core';

import Navbar from '../components/Navbar';
import Heading from '../components/Heading';

const Login = () => {
    return (
        <div>
            <div>Login</div>

            <form action="./login/" method="POST">
                <label for="email">email</label>
                <input type="text" id="email" name="email" />

                <label for="password">password</label>
                <input type="text" id="password" name="password" />

                <Button variant="contained"> Login </Button>
            </form>
        </div>
    );
}

export default Login;