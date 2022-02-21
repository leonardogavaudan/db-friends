import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import PageTitle from '../components/PageTitle';
import Contact from '../components/Contact';

const Home = () => {
  const [contacts, setContacts] = useState([]);

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
    getInitialData().then((response) => {
      setContacts(response);
      console.log(JSON.stringify(response));
    });
    console.log('Mounting Component');
  }, []);

  const CustomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }));

  return (
    <Container>
      <PageTitle>HOME</PageTitle>

      <CustomBox>
        {contacts.map((contact, i) => {
          console.log('here');
          return (
            <Contact
              key={i}
              firstName={contact.firstName}
              lastName={contact.lastName}
            />
          );
        })}
      </CustomBox>
    </Container>
  );
};

export default Home;
