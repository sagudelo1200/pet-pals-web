/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Kit 2 PRO React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKButton from 'components/MKButton';
import MKBadge from 'components/MKBadge';

// Material Kit 2 PRO React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';

// Presentation page sections
import Counters from 'pages/landing/sections/Counters';

// Routes
import routes from 'routes';
import footerRoutes from 'footer.routes';

// Images
import bgImage from 'assets/images/bg-presentation.jpg';

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'internal',
          route: '/unirme',
          label: 'Unirme',
          color: 'warning',
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down('md')]: {
                  fontSize: size['3xl'],
                },
              })}
              textAlign="center"
            >
              Pet Pals{' '}
              <MKBadge
                badgeContent="pro"
                size="lg"
                variant="contained"
                color="white"
                container
                sx={{ mt: -4 }}
              />
            </MKTypography>

            <MKTypography variant="body1" color="white" textAlign="center" px={6} mt={1}>
              Porque tu perro no debería esperar a que tengas tiempo.
            </MKTypography>

            <MKBox mt={6} mx={1}>
              <MKButton component="a" href="/unirme" color="warning" variant="contained">
                Unirme ahora
              </MKButton>
            </MKBox>
            <MKBox mt={6} mx={1}>
              <MKButton component="a" href="/unirme" color="success" variant="outlined">
                Soy paseador
              </MKButton>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
