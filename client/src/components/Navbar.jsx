import styled from '@emotion/styled';

import Link from './Link';
import { Button } from '@mui/material';

const Bar = styled.div`
  background-color: ${(props) => props.theme.palette.secondary.main};
  display: flex;
`;

const Navbar = () => (
  <Bar>
    <div>
      <Button variant="text">
        <Link href="/" color="textPrimary">
          <a>HOME</a>
        </Link>
      </Button>

      <Button variant="text">
        <Link href="/login" color="textPrimary">
          <a>LOGIN</a>
        </Link>
      </Button>

      <Button variant="text">
        <Link href="/about" color="textPrimary">
          <a>ABOUT</a>
        </Link>
      </Button>
    </div>

    <Button variant="text">
      <Link href="/new_contact" color="textPrimary">
        <a>+</a>
      </Link>
    </Button>
  </Bar>
);

export default Navbar;
