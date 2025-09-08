import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'contexts/AuthContext';

const Logout = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const cerrarSesion = async () => {
      await logout();
      navigate('/');
    };
    cerrarSesion();
  }, [logout, navigate]);

  return null;
};

export default Logout;
