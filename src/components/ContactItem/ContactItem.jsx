import { deleteContact } from 'redux/contacts/operations';
import MUI from 'components/MUI';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';




function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <MUI.Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          // width: 128,
          height: 128,
          padding: 2,
        },
      }}
    >
      <MUI.Paper elevation={6} >
        <MUI.Typography component="h1" variant="h5" align='center'>
          {name}
        </MUI.Typography>
        <MUI.Typography component="p" align='center'>
          {number}
        </MUI.Typography>
        <MUI.Button variant="outlined" onClick={onDelete}>
          Delete
        </MUI.Button>

      </MUI.Paper>
    </MUI.Box>
  );
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
