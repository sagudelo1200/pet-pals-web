import React from 'react';
import { Link } from 'react-router-dom';
// Si tienes un contexto de autenticación, puedes importar y usar el nombre del usuario aquí
// import { useAuth } from '../../hooks/useAuth';

const Dashboard = () => {
  // Ejemplo: const { user } = useAuth();
  const userName = 'John Doe'; // Reemplaza por user?.name si tienes contexto

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 3rem',
          background: '#fff',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="assets/images/logo-ct-dark.png"
            alt="Pet Pals Logo"
            style={{ width: 48, height: 48, marginRight: 12 }}
          />
          <span style={{ fontSize: 32, fontWeight: 600, color: '#31737a' }}>Pet Pals</span>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link to="/perfil" style={{ color: '#31737a', fontWeight: 500, textDecoration: 'none' }}>
            My Account
          </Link>
          <Link
            to="/salir"
            style={{
              color: '#31737a',
              fontWeight: 500,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ fontSize: 20 }}>👤</span> Logout
          </Link>
        </nav>
      </header>
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem', color: '#263238' }}>
          Welcome back, {userName}
        </h1>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 400,
            marginBottom: '2.5rem',
            color: '#263238',
          }}
        >
          What would you like to do?
        </h2>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/find-walker" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                padding: '2rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 200,
              }}
            >
              <span style={{ fontSize: 48, color: '#31737a', marginBottom: 12 }}>🔍</span>
              <span style={{ fontSize: 22, color: '#263238', fontWeight: 500 }}>Find a walker</span>
            </div>
          </Link>
          <Link to="/upcoming-walks" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                padding: '2rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 200,
              }}
            >
              <span style={{ fontSize: 48, color: '#31737a', marginBottom: 12 }}>📅</span>
              <span style={{ fontSize: 22, color: '#263238', fontWeight: 500 }}>
                Upcoming walks
              </span>
            </div>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <div
              style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                padding: '2rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: 200,
              }}
            >
              <span style={{ fontSize: 48, color: '#31737a', marginBottom: 12 }}>👤</span>
              <span style={{ fontSize: 22, color: '#263238', fontWeight: 500 }}>My profile</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
