import { BaseModel } from "./BaseModel";

export type RolUsuario = 'dueño' | 'paseador' | 'admin';
export type EstadoUsuario = 'activo' | 'inactivo' | 'baneado';
export type TipoDocumento = 'NUIP' | 'CC' | 'CE' | 'Pasaporte';

export interface DocumentoIdentidad {
  tipo: TipoDocumento;
  numero: string;
}

export interface Usuario extends BaseModel {
  // Identificación
  nombre: string;
  foto?: string;
  correo: string;
  celular: string;

  // Datos generales
  fecha_nacimiento?: Date;
  direccion?: string;
  zona?: string;

  // Roles y verificación
  roles: RolUsuario[];
  documento_identidad?: DocumentoIdentidad;
  verificado: boolean;

  // Estado y control
  fecha_registro: Date;
  estado: EstadoUsuario;

  // Preferencias
  preferencias?: string;
}