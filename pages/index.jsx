import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';

const Home = () => {
  const [contacts, setContacts] = useState();

  const getInitialData = () => {
    return fetch('/api/contacts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    console.log('here');
    getInitialData().then((response) => {
      setContacts(JSON.stringify(response));
      console.log(JSON.stringify(response));
    });
    console.log('Mounting Component');
  }, []);

  return (
    <Container>
      <PageTitle>HOME</PageTitle>
      <p>{contacts}</p>
    </Container>
  );
};

export default Home;
