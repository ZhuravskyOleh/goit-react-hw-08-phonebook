import { Item } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, IconButton, Typography } from '@mui/material';
import  DeleteIcon  from '@mui/icons-material';

function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    // <Item>
    //   <p>
    //     {name}: {number}
    //   </p>
    //   <button onClick={onDelete}>Delete</button>
    // </Item>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          // width: 128,
          height: 128,
          padding: 2,
        },
      }}
    >
      <Paper elevation={6}>
        <Typography component="h1" variant="h5" align='center'>
          {name}
        </Typography>
        <Typography component="p" align='center'>
          {number}
        </Typography>
        <Button variant="outlined" onClick={onDelete}>
          Delete
        </Button>

      </Paper>
    </Box>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
