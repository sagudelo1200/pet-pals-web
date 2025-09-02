import { BaseModel } from "./BaseModel";

export interface Usuario extends BaseModel {
  nombre: string;
  email: string;
  // otros campos...
}