import styled from '@emotion/styled';
import Link from './Link';
import { Button } from '@mui/material';

const Bar = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
}));

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const Navbar = () => (
  <Bar>
    <CustomLink href="/">
      <Button>HOME</Button>
    </CustomLink>

    <CustomLink href="/login">
      <Button>LOGIN</Button>
    </CustomLink>

    <CustomLink href="/about">
      <Button>ABOUT</Button>
    </CustomLink>

    <CustomLink href="/new_contact">
      <Button>+</Button>
    </CustomLink>
  </Bar>
);

export default Navbar;
