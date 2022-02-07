import { Button, Container, Typography } from '@mui/material';

const Login = () => {
  return (
    <Container>
      <Typography variant="h4">LOGIN</Typography>

      <form action="./login/" method="POST">
        <div>
          <label for="email">email</label>
          <input type="text" id="email" name="email" />
          <label for="password">password</label>
          <input type="text" id="password" name="password" />
        </div>

        <Button variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
