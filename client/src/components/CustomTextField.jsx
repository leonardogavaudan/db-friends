import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const CustomTextField = styled(TextField)(({ theme }) => ({
  marginInlineEnd: '1em',
  marginBlock: '1em',
}));

export default CustomTextField;
