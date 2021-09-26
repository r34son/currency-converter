import { useMemo } from 'react';
import { AppBar, Tab, Tabs, CircularProgress, Box } from '@mui/material';
import { useLocation, Link, Switch, Route } from 'react-router-dom';
import TabPanel from './TabPanel';
import { routes } from '../routes';
import { useDaily } from '../queries';

const Main = () => {
  const { pathname } = useLocation();
  const { isLoading } = useDaily();

  const currentTab = useMemo(() => routes[pathname]?.value, [pathname]);

  if (isLoading) return null;
  return (
    <>
      <AppBar position="static">
        <Tabs
          value={currentTab}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
        >
          {Object.entries(routes).map(([path, { label, value }]) =>
            <Tab key={value} label={label} component={Link} to={path} />,
          )}
        </Tabs>
      </AppBar>
      <Switch>
        {Object.entries(routes).map(([path, { value, Component }]) => (
          <Route key={value} path={path}>
            <TabPanel value={currentTab} index={value}>
              <Component />
            </TabPanel>
          </Route>
        ))}
      </Switch>
    </>
  );
};

export default Main;
