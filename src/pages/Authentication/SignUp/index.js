import { useState } from 'react';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import Switch from '@mui/material/Switch';
import Icon from '@mui/material/Icon';

// Material Kit 2 PRO React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';

// Authentication layout components
import IllustrationLayout from 'pages/Authentication/components/IllustrationLayout';

// Image
import bgImage from 'assets/images/illustrations/signin.jpg';

function SignUp() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <IllustrationLayout
      title="Únete a Pet Pals hoy"
      description="Ya seas dueño de mascota o paseador, aquí encontrarás la comunidad perfecta para ti."
      illustration={bgImage}
    >
      <MKBox component="form" role="form">
        <MKBox mb={2}>
          <MKInput type="email" label="Correo" fullWidth />
        </MKBox>
        <MKBox mb={2}>
          <MKInput type="password" label="Contraseña" fullWidth />
        </MKBox>
        <MKBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <MKTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetRememberMe}
            sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
          >
            Soy paseador ({rememberMe ? 'Sí' : 'No'})
          </MKTypography>
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton variant="gradient" color="warning" size="large" fullWidth>
            <Icon ml={4}>pets</Icon> Comenzar ahora
          </MKButton>
        </MKBox>
        <MKBox mt={3} textAlign="center">
          <MKTypography variant="button" color="text">
            Ya tiene una cuenta?{' '}
            <MKTypography
              component={Link}
              to="/registro"
              variant="button"
              color="success"
              fontWeight="medium"
              textGradient
            >
              Ingresar
            </MKTypography>
          </MKTypography>
        </MKBox>
      </MKBox>
    </IllustrationLayout>
  );
}

export default SignUp;
