import { Container, Paper, Typography } from '@mui/material';

const Contact = (props) => {
  return (
    <Container>
      <Paper elevation={3}>
        <Typography variant="body2">{props.firstName}</Typography>
        <Typography variant="body2">{props.lastName}</Typography>
      </Paper>
    </Container>
  );
};

export default Contact;
