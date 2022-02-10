import { Container, Typography } from '@mui/material';

const Contact = (props) => {
  return (
    <Container>
      <Typography variant="body2">{props.firstName}</Typography>
      <Typography variant="body2">{props.lastName}</Typography>
    </Container>
  );
};

export default Contact;
