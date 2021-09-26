import { Container, Paper, Box } from '@mui/material';
import { useLocation, Redirect } from 'react-router-dom';
import PaletteModeSwitch from './PaletteModeSwitch';
import Main from './Main';
import { routes, defaultPath } from '../routes';

const Layout = () => {
  const { pathname } = useLocation();

  if (!routes[pathname]) return <Redirect to={defaultPath} />;
  return (
    <Container
      maxWidth="lg"
      sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Main />
      </Paper>
      <Box sx={{ position: 'absolute', top: 50, right: 50 }}>
        <PaletteModeSwitch />
      </Box>
    </Container>
  );
};

export default Layout;
