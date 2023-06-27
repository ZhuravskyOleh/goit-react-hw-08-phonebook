import MUI from 'components/MUI';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <h2>Contacts</h2> */}
      {/* <ContactForm />
      <Filter />
      <ContactList />
      {isLoading && <p>Loading...</p>} */}
      <MUI.Box sx={{ flexGrow: 1 }}>
      <MUI.Grid container spacing={2} columns={16}>
        <MUI.Grid item xs={5}>
            <ContactForm />
            <Filter />
        </MUI.Grid>
          <MUI.Grid item xs={8}>
            <ContactList />
            {isLoading && <p>Loading...</p>}
        </MUI.Grid>
      </MUI.Grid>
    </MUI.Box>
      
    </div>
  );
}
