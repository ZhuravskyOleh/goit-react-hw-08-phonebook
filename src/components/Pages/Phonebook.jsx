import { useEffect} from 'react';
import { ContactForm } from 'components/ContantForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations.js';
import { selectError, selectIsLoading } from 'Redux/selectors.js';

export const Phonebook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ textAlign: "center" }}>Contacts</h2>
      <Filter />
      <br />
      {isLoading && !error && <b>Request in progress...</b>}
      <br />
      {error && <b>Error: {error}</b>}
      <ContactList />
    </div>
  );
};



