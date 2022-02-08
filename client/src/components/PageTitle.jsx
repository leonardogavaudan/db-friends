import { Typography } from '@mui/material';

const PageTitle = ({ children }) => {
  return (
    <Typography variant="h4" sx={{ mt: 3, mb: 10 }}>
      {children}
    </Typography>
  );
};

export default PageTitle;
