import { useState } from 'react';
import { Button, Container } from '@mui/material';

import CustomTextField from '../components/CustomTextField';
import PageTitle from '../components/PageTitle';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let data = { firstName, lastName, email, password };

    console.log(data);

    fetch('/api/register', {
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
      <PageTitle>REGISTER</PageTitle>
      <div>
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

        <div>
          <CustomTextField
            required
            variant="filled"
            label="Email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />

          <CustomTextField
            required
            variant="filled"
            label="Password"
            value={password}
            onInput={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="outlined"
        sx={{ marginBlock: '2em' }}
        onClick={handleSubmit}
      >
        SUBMIT
      </Button>
    </Container>
  );
};

export default Register;
