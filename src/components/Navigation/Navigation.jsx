import { NavLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';

import MUI from 'components/MUI';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <MUI.Toolbar>
      <NavLink to="/">
        <MUI.Button
          startIcon={<HomeIcon />}
          sx={{ color: 'white' }}
          variant="outlined"
        >
          Home
        </MUI.Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <MUI.Button
            startIcon={<RecentActorsIcon />}
            sx={{ color: 'white' }}
            variant="outlined"
          >
            Phonebook
          </MUI.Button>
        </NavLink>
      )}
    </MUI.Toolbar>
  );
}
