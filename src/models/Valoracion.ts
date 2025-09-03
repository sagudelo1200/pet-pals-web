import { BaseModel } from "./BaseModel";

export interface Valoracion extends BaseModel {
  // Identificación
  id_paseo: string;
  id_usuario: string; // usuario que califica
  id_paseador: string; // paseador calificado

  // Detalles
  rating: number; // 1-5 estrellas
  comentario?: string;
  fecha: Date;
}
