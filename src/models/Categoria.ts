import type Produto from "./Produto";

export default interface Categoria {
  nome: ReactNode;
  id: number;
  descricao: string;
  produto?: Produto[] | null;
}