import React, { useEffect } from 'react';
// react-router components
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Material Kit 2 PRO React themes
import theme from 'assets/theme';
import Landing from 'layouts/pages/landing';
import SignUp from 'pages/Authentication/SignUp';
// Material Kit 2 PRO React routes
import routes from 'routes';

// Custom pages
import BaseCreator from 'pages/BaseCreator';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, [pathname]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getRoutes = (allRoutes: any[]): React.ReactNode =>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    allRoutes.map((route: any, idx: number) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        // Usa route.key si existe, si no usa route.route, si no usa el índice
        const key = route.key || route.route || idx;
        return <Route path={route.route} element={route.component} key={key} />;
      }
      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Landing />} />
        <Route path="/unirme" element={<SignUp />} />
        <Route path="/base-creator" element={<BaseCreator />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
