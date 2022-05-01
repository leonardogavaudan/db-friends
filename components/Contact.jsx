import React from 'react';

// const div = styled(Card)(({ theme }) => ({
//   margin: '2em',
//   flexBasis: '40%',
//   padding: 0,
// }));

const Contact = (props) => {
  return (
    <div elevation={3}>
      <button variant="outlined" sx={{ width: '100%' }}>
        <div variant="body2">
          {props.firstName} {props.lastName}
        </div>
      </button>
    </div>
  );
};

export default Contact;
