import useAuth from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import MUI from 'components/MUI';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  return (
    <MUI.AppBar>
      <MUI.Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation />
        <MUI.Toolbar>{isLoggedIn ? <UserMenu /> : <AuthNav />}</MUI.Toolbar>
      </MUI.Container>
    </MUI.AppBar>
  );
}
