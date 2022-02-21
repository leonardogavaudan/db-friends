import { Card, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';

const CustomCard = styled(Card)(({ theme }) => ({
  margin: '2em',
  flex: '1',
  padding: 0,
}));

const Contact = (props) => {
  return (
    <CustomCard elevation={3}>
      <Button variant="outlined" sx={{ width: '100%' }}>
        <Typography variant="body2">
          {props.firstName} {props.lastName}
        </Typography>
      </Button>
    </CustomCard>
  );
};

export default Contact;
