import { useState, useEffect } from 'react';
import { useAuthContext } from 'contexts/AuthContext';

export const useSignUpLogic = () => {
  const {
    loginWithGoogle,
    loginWithEmailAndPassword,
    registerWithEmailAndPassword,
    user,
    loading,
  } = useAuthContext();
  const [isWalker, setIsWalker] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Extraer el argumento de url query
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const initialIsWalker = queryParams.get('walker') === 'true';
    setIsWalker(initialIsWalker);
  }, []);

  const handleSetIsWalker = () => setIsWalker(!isWalker);

  const [errorMsg, setErrorMsg] = useState('');

  const handleLoginOrRegister = async () => {
    setErrorMsg('');
    if (!email || !password) return;
    try {
      await loginWithEmailAndPassword(email, password);
    } catch (error) {
      const firebaseError = error as { code?: string; message?: string };
      if (firebaseError.code === 'auth/wrong-password') {
        setErrorMsg('Contraseña incorrecta.');
      } else {
        // Para cualquier otro error, intentar registrar
        try {
          await registerWithEmailAndPassword(email, password);
        } catch (regError) {
          const regFirebaseError = regError as { message?: string };
          setErrorMsg(regFirebaseError.message || 'Error al crear cuenta');
        }
      }
    }
  };

  return {
    isWalker,
    handleSetIsWalker,
    email,
    setEmail,
    password,
    setPassword,
    loginWithGoogle,
    handleLoginOrRegister,
    errorMsg,
    user,
    loading,
  };
};
