import type Produto from "./Produto";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  perfil: string;
  produto?: Produto[] | null;
}