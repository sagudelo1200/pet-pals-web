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
import Divider from '@mui/material/Divider';

// Material Kit 2 PRO React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

// Material Kit 2 PRO React examples
import DefaultCounterCard from 'examples/Cards/CounterCards/DefaultCounterCard';

function Counters() {
  return (
    <MKBox component="section" py={0}>
      <MKTypography variant="h3" textAlign="center" px={6} my={1}>
        Lo que queremos lograr contigo
      </MKTypography>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: 'auto' }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={90}
              suffix="+"
              color="success"
              title="👟 Paseadores Verificados"
              description="Crear una red de 90+ paseadores certificados en Medellín."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: 'none', md: 'block' }, mx: 0 }} />
            <DefaultCounterCard
              count={600}
              suffix="+"
              color="warning"
              title="🐾 Mascotas Felices"
              description="Conectar a más de 600 familias con cuidadores de confianza."
            />
            <Divider orientation="vertical" sx={{ display: { xs: 'none', md: 'block' }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={24}
              suffix="/7"
              title="📞 Soporte Confiable"
              description="Ofrecer soporte dedicado 24/7 para todas tus necesidades."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
