import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
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

  // console.log('here');
  // let contactComponents =

  return (
    <Container>
      <PageTitle>HOME</PageTitle>
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
    </Container>
  );
};

export default Home;
