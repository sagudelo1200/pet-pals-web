import { BaseModel } from "./BaseModel";

export interface Mascota extends BaseModel {
  nombre: string;
  especie: string;
  edad: number;
  // otros campos relevantes
}
