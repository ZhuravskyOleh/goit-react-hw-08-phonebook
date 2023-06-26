import { NavLink } from 'react-router-dom';
import MUI from 'components/MUI.js';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

export default function AuthNav() {
  return (
    <>
      <NavLink to="/register">
        <MUI.Button
          startIcon={<HowToRegIcon />}
          sx={{ color: 'white' }}
          variant="outlined"
        >
          Register
        </MUI.Button>
      </NavLink>

      <NavLink to="/login">
        <MUI.Button
          startIcon={<LoginIcon />}
          sx={{ color: 'white' }}
          variant="outlined"
        >
          LogIn
        </MUI.Button>
      </NavLink>
    </>
  );
}
