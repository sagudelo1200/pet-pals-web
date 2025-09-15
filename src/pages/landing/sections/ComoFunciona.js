// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 PRO React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

// Material Kit 2 PRO React examples
import SimpleInfoCard from 'examples/Cards/InfoCards/SimpleInfoCard';

function ComoFunciona() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          mx="auto"
          textAlign="center"
          pb={6}
        >
          <MKTypography variant="h2" mb={1}>
            Cómo Funciona
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Un proceso sencillo para dueños y paseadores.
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              color="warning"
              icon="person_add_icon"
              title="Regístrate sin complicaciones"
              description="Crea tu perfil en minutos como dueño o paseador. Es gratis, rápido y sencillo."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              color="warning"
              icon="location_on_icon"
              title="Accede a paseos en tu área"
              description="Ya seas dueño o paseador, encuentra opciones cerca de ti con facilidad."
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SimpleInfoCard
              color="warning"
              icon="event_icon"
              title="Disfruta con tranquilidad"
              description="Elige el horario que mejor te convenga y haz que cada paseo cuente."
              direction="center"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ComoFunciona;
