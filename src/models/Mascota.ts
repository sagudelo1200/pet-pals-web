import { BaseModel } from "./BaseModel";

export type EspecieMascota = 'perro';
export type GeneroMascota = 'macho' | 'hembra';
export type TamanoMascota = 'muy pequeño' | 'pequeño' | 'mediano' | 'grande' | 'gigante';
export type NivelEnergia = 'bajo' | 'medio' | 'alto';

export interface VacunaMascota {
  nombre: string;
  fecha?: Date;
}

export interface Mascota extends BaseModel {
  // Identificación
  id_usuario: string;
  nombre: string;
  foto?: string;

  // Datos generales
  especie: EspecieMascota;
  raza?: string;
  fecha_nacimiento?: Date;
  genero?: GeneroMascota;
  tamano?: TamanoMascota;
  peso?: number;

  // Salud y cuidado
  esterilizado?: boolean;
  vacunas?: VacunaMascota[];
  condiciones_salud?: string[];
  condiciones_comportamiento?: string[];
  historial_medico?: string;

  // Preferencias de paseo
  nivel_energia?: NivelEnergia;
  preferencias_paseo?: string[];

  // Otros
  descripcion?: string;
}
