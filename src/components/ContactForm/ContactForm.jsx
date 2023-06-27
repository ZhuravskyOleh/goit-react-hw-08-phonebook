import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import MUI from 'components/MUI';


function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    if (contacts.find(el => el.name === name)) {
      Notiflix.Notify.warning(
        'Name "' + name + '" already exists in the phone book'
      );

      e.target.reset();
      return;
    }
    const number = e.target.elements.number.value;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    e.target.reset();
  };
const defaultTheme = MUI.createTheme();


  return (
    <MUI.ThemeProvider theme={defaultTheme}>
      <MUI.Typography variant="h5" textAlign={'center'}>
        Add contact
      </MUI.Typography>
      <MUI.Container component="main" maxWidth="xs">
        <MUI.CssBaseline />
        <MUI.Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <MUI.Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <MUI.Grid container spacing={2}>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  required
                  fullWidth
                  id="name"
                  type="text"
                  name="name"
                  label='Name'
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  autoComplete="email"
                />
              </MUI.Grid>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  required
                  fullWidth
                  id="tel"
                  type="tel"
                  name="number"
                  label='Phone'
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  autoComplete="new-password"
                />
              </MUI.Grid>
            </MUI.Grid>
            <MUI.Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </MUI.Button>
          </MUI.Box>
        </MUI.Box>
      </MUI.Container>
    </MUI.ThemeProvider>
  );
}

export default ContactForm;


