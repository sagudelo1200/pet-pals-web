import React, { useEffect } from 'react';
// react-router components
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Material Kit 2 PRO React themes
import theme from 'assets/theme';
import Presentation from 'layouts/pages/presentation';
import SignUp from 'pages/Authentication/SignUp';
import Coworking from 'pages/LandingPages/Coworking';
// Material Kit 2 PRO React routes
import routes from 'routes';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes: any[]): React.ReactNode =>
    allRoutes.map((route: any) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }
      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/unirme" element={<SignUp />} />
        <Route path="/coworking" element={<Coworking />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
