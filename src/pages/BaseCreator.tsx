import React from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const modelos = [
  {
    nombre: 'usuarios',
    base: {
      id: 'BaseModel',
      nombre: '',
      foto: '',
      correo: '',
      celular: '',
      fecha_nacimiento: '',
      direccion: {
        calle: '',
        numero: '',
        barrio: '',
        comuna: '',
        ciudad: '',
        departamento: '',
        pais: '',
        codigo_postal: '',
        coordenadas: { lat: 0, lng: 0 },
        referencia: '',
        descripcion: '',
      },
      zona: '',
      roles: [],
      documento_identidad: { tipo: '', numero: '' },
      verificado: false,
      fecha_registro: '',
      estado: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    nombre: 'mascotas',
    base: {
      id: 'BaseModel',
      id_usuario: 'BaseModel',
      nombre: '',
      foto: '',
      especie: '',
      raza: '',
      fecha_nacimiento: '',
      genero: '',
      tamano: '',
      peso: 0,
      esterilizado: false,
      vacunas: [{ nombre: '', fecha: '' }],
      condiciones_salud: [''],
      condiciones_comportamiento: [''],
      historial_medico: '',
      nivel_energia: '',
      preferencias_paseo: [''],
      descripcion: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    nombre: 'perfiles_publicos',
    base: {
      id: 'BaseModel',
      id_usuario: 'BaseModel',
      nombre: '',
      foto: '',
      biografia: '',
      experiencia: '',
      zonas_servicio: [''],
      disponibilidad: '',
      mascotas_aceptadas: [''],
      max_mascotas: 0,
      valoraciones: [''],
      rating_promedio: 0,
      cantidad_paseos_realizados: 0,
      verificacion: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    nombre: 'paseos',
    base: {
      id: 'BaseModel',
      creado_por: '',
      id_paseador: '',
      tipo_paseo: '',
      fecha_hora_inicio: '',
      duracion_estimada: 0,
      precio: 0,
      estado: '',
      ubicacion_inicio: '',
      ubicacion_fin: '',
      tracking_gps: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    nombre: 'paseos_mascota',
    base: {
      id: 'BaseModel',
      id_paseo: '',
      id_mascota: '',
      observaciones: '',
      codigo_recogida: '',
      codigo_entrega: '',
      estado_mascota: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    nombre: 'valoraciones',
    base: {
      id: 'BaseModel',
      id_paseo: '',
      id_usuario: '',
      id_paseador: '',
      rating: 0,
      comentario: '',
      fecha: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];

export default function BaseCreator() {
  const [result, setResult] = React.useState<string>('');

  const crearBases = async () => {
    try {
      for (const modelo of modelos) {
        await setDoc(doc(db, modelo.nombre, 'BaseModel'), modelo.base);
      }
      setResult('¡Todos los documentos base fueron creados exitosamente!');
    } catch (e) {
      setResult('Error: ' + (e as Error).message);
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>Crear documentos base en Firebase</h2>
      <button onClick={crearBases}>Crear documentos base</button>
      <div style={{ marginTop: 16 }}>{result}</div>
    </div>
  );
}
