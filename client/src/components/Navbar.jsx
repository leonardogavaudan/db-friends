import styled from '@emotion/styled';
import Link from './Link';
import { Button } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import HomeIcon from '@mui/icons-material/Home';

const Bar = styled.div`
  display: flex;
`;

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const Navbar = () => (
  <Bar>
    <div>
      <Button>
        <CustomLink href="/">HOME</CustomLink>
      </Button>

      <Button>
        <CustomLink href="/login">LOGIN</CustomLink>
      </Button>

      <Button>
        <CustomLink href="/about">ABOUT</CustomLink>
      </Button>
    </div>

    <Button>
      <CustomLink href="/new_contact">+</CustomLink>
    </Button>
  </Bar>
);

export default Navbar;
