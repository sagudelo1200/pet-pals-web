// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';

// Material Kit 2 PRO React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

// Material Kit 2 PRO React examples
import DefaultBackgroundCard from 'examples/Cards/BackgroundCards/DefaultBackgroundCard';

// HelpCenter page components
import ListItem from 'components/ListItem';

// Images
import bgImage1 from 'assets/images/examples/bg1.png';
import bgImage2 from 'assets/images/examples/bg2.png';

function Beneficios() {
  return (
    <MKBox component="section" py={9}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={10}
          lg={5}
          sx={{ mx: 'auto', textAlign: 'center' }}
        >
          <MKBox
            width="3rem"
            height="3rem"
            borderRadius="lg"
            shadow="md"
            variant="gradient"
            bgColor="success"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon fontSize="small" sx={{ opacity: 0.8 }}>
              pets
            </Icon>
          </MKBox>
          <MKTypography variant="h3" mt={3}>
            Seguridad y confianza en cada paso
          </MKTypography>
          <MKTypography variant="body2" color="text">
            Porque cada paseo es más que un servicio: es bienestar, compañía y tranquilidad para ti
            y tu perro.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={4} sx={{ ml: 'auto' }}>
            <DefaultBackgroundCard
              image={bgImage1}
              label="para dueños"
              title="Tu perro feliz, tú tranquilo"
              description="Confianza real para que disfrutes tu día sin preocupaciones."
              action={{
                type: 'internal',
                route: '/unirme',
                label: '¡unirme ahora!',
                color: 'warning',
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr: 'auto', ml: { xs: 0, md: 6 } }}>
            <ListItem title="Paseadores verificados">
              Tu perro merece lo mejor: conoce a paseadores con experiencia y referencias
              confiables.
            </ListItem>
            <ListItem title="Sigue cada paso">
              Rastrea el paseo de tu mejor amigo en tiempo real y recibe reportes con fotos y
              actualizaciones.
            </ListItem>
            <ListItem title="Cuidado a tu medida">
              Elige horarios, frecuencia y tipo de paseo según las necesidades de tu mascota.
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5} sx={{ ml: 'auto' }}>
            <ListItem title="Oportunidades constantes">
              Conecta con dueños que buscan paseadores de confianza en tu zona.
            </ListItem>
            <ListItem title="Gana con respaldo">
              Pagos garantizados y sin riesgos, porque tu trabajo merece seguridad.
            </ListItem>
            <ListItem title="Haz crecer tu perfil">
              Recibe valoraciones positivas y construye una reputación sólida como paseador.
            </ListItem>
          </Grid>
          <Grid item xs={12} md={4} sx={{ mr: 'auto', ml: { xs: 0, md: 6 } }}>
            <DefaultBackgroundCard
              image={bgImage2}
              label="para paseadores"
              title="Convierte tu pasión en ingresos seguros"
              description="Haz lo que amas, mientras construyes tu reputación como paseador profesional."
              action={{
                type: 'internal',
                route: '/unirme?walker=true',
                label: 'quiero ser paseador',
                color: 'success',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Beneficios;
