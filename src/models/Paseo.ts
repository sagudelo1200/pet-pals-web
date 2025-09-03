import { BaseModel } from "./BaseModel";

export type TipoPaseo = 'solicitado' | 'programado';
export type EstadoPaseo = 'pendiente' | 'confirmado' | 'en_progreso' | 'completado' | 'cancelado';

export interface Paseo extends BaseModel {
  creado_por: string; // dueño que solicita
  id_paseador: string;
  tipo_paseo: TipoPaseo;
  fecha_hora_inicio: Date;
  duracion_estimada: number; // minutos
  precio: number;
  estado: EstadoPaseo;
  ubicacion_inicio?: string; // dirección o coordenadas
  ubicacion_fin?: string;
  tracking_gps?: string; // referencia a otro documento
}
