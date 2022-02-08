import { Box, Button, Container, Typography } from '@mui/material';
import PageTitle from '../components/PageTitle';

const Login = () => {
  return (
    <Container>
      <PageTitle>LOGIN</PageTitle>

      <Box color="primary">
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
      </Box>
    </Container>
  );
};

export default Login;
