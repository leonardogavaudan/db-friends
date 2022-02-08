import styled from '@emotion/styled';
import { Box, Button, Container } from '@mui/material';
import PageTitle from '../components/PageTitle';
import CustomTextField from '../components/CustomTextField';
import { useState } from 'react';

const NewContact = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let data = { firstName, lastName };

    console.log(data);

    fetch('http://127.0.0.1:8080', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => console.log('Success:', JSON.stringify(response)))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Container color="primary">
      <PageTitle>NEW CONTACT</PageTitle>

      <div>
        <CustomTextField
          required
          variant="filled"
          label="First Name"
          value={firstName}
          onInput={(e) => setFirstName(e.target.value)}
        />
        <CustomTextField
          required
          variant="filled"
          label="Last Name"
          value={lastName}
          onInput={(e) => setLastName(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        variant="outlined"
        sx={{ marginBlock: '2em' }}
        onClick={handleSubmit}
      >
        Create
      </Button>
    </Container>
  );
};

export default NewContact;
