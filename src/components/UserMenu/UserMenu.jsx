import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations.js';
import MUI from 'components/MUI.js';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <>
      <MUI.Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <MUI.Box>
          <p>Hi, {user.name} !</p>
          <p>Email: {user.email}</p>
        </MUI.Box>
        <MUI.Button
          startIcon={<LogoutIcon />}
          variant="contained"
          color="error"
          type="button"
          sx={{ height: 'max-content' }}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </MUI.Button>
      </MUI.Box>
    </>
  );
}
