import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: '#ffffff',
    },
    background: {
      default: '#121212',
    },
    primary: {
      main: '#282a36',
    },
    secondary: {
      main: '#282a36',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
