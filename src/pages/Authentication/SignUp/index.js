import { useSignUpLogic } from './useSignUpLogic';
import { Navigate } from 'react-router-dom';

// react-router-dom components
// import { Link } from 'react-router-dom';

// @mui material components
import Switch from '@mui/material/Switch';

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
  const {
    isWalker,
    handleSetIsWalker,
    email,
    setEmail,
    password,
    setPassword,
    loginWithGoogle,
    loading,
    user,
    handleLoginOrRegister,
    errorMsg,
  } = useSignUpLogic();

  // Si el usuario está autenticado, redirigir al dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <IllustrationLayout
      title="Únete a Pet Pals hoy"
      description="Ya seas dueño de mascota o paseador, aquí encontrarás la comunidad perfecta para ti."
      illustration={bgImage}
    >
      <MKBox
        component="form"
        role="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLoginOrRegister();
        }}
      >
        <MKBox mb={2}>
          <MKInput
            type="email"
            label="Correo"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </MKBox>
        <MKBox mb={2}>
          <MKInput
            type="password"
            label="Contraseña"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </MKBox>
        {errorMsg && (
          <MKBox mb={2}>
            <MKTypography color="error" variant="caption">
              {errorMsg}
            </MKTypography>
          </MKBox>
        )}
        <MKBox display="flex" alignItems="center" ml={-1}>
          <Switch checked={isWalker} onChange={handleSetIsWalker} />
          <MKTypography
            variant="button"
            fontWeight="regular"
            color="text"
            onClick={handleSetIsWalker}
            sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
          >
            Soy paseador ({isWalker ? 'Sí' : 'No'})
          </MKTypography>
        </MKBox>
        <MKBox mt={4} mb={1}>
          <MKButton
            variant="gradient"
            color="success"
            size="large"
            fullWidth
            type="submit"
            disabled={loading}
          >
            Comenzar ahora
          </MKButton>
        </MKBox>
        <MKBox mt={1} mb={1}>
          <MKButton
            variant="gradient"
            color="warning"
            size="large"
            fullWidth
            onClick={loginWithGoogle}
            disabled={loading}
          >
            Unirme con Google
          </MKButton>
        </MKBox>
        {/* <MKBox mt={3} textAlign="center">
          <MKTypography variant="button" color="text">
            Ya tiene una cuenta?{' '}
            <MKTypography
              component={Link}
              to="/unirme"
              variant="button"
              color="success"
              fontWeight="medium"
              textGradient
            >
              Ingresar
            </MKTypography>
          </MKTypography>
        </MKBox> */}
      </MKBox>
    </IllustrationLayout>
  );
}

export default SignUp;
