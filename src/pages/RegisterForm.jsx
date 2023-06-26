import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import MUI from 'components/MUI';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 50,
  },
};

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
    <div>
      <h1>Page of registration</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          <MUI.TextField
            label="Name"
            helperText="Please enter your name"
            focused
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <MUI.TextField
            label="Email"
            helperText="Please enter your email"
            focused
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <MUI.TextField
            label="Password"
            focused
            helperText="Please enter your password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <MUI.Button variant="contained" type="submit" color="success">
          Refister
        </MUI.Button>
      </form>
    </div>
  );
}
