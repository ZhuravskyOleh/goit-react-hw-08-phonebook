import MUI from 'components/MUI';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux//contacts/selectors';

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <MUI.Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem id={id} key={id} number={number} name={name} />
      ))}
    </MUI.Grid>
  );
}

export default ContactList;
