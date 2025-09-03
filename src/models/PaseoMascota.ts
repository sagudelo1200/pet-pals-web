import { BaseModel } from "./BaseModel";

export type EstadoMascotaPaseo = 'pendiente' | 'en_paseo' | 'entregada' | 'cancelada';

export interface PaseoMascota extends BaseModel {
  id_paseo: string;
  id_mascota: string;
  observaciones?: string;
  codigo_recogida?: string;
  codigo_entrega?: string;
  estado_mascota: EstadoMascotaPaseo;
}
