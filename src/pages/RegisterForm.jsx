import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import MUI from 'components/MUI';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';





const defaultTheme = MUI.createTheme();

export default function RegisterForm() {
    const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <MUI.ThemeProvider theme={defaultTheme}>
      <MUI.Container component="main" maxWidth="xs">
        <MUI.CssBaseline />
        <MUI.Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <MUI.Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </MUI.Avatar>
          <MUI.Typography component="h1" variant="h5">
            Sign up
          </MUI.Typography>
          <MUI.Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <MUI.Grid container spacing={2}>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  onChange={handleChange}
                  label="Name"
                  autoFocus
                />
              </MUI.Grid>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  autoComplete="email"
                />
              </MUI.Grid>
              <MUI.Grid item xs={12}>
                <MUI.TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
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
              Sign Up
            </MUI.Button>
            
          </MUI.Box>
        </MUI.Box>
      </MUI.Container>
    </MUI.ThemeProvider>
  );
}
