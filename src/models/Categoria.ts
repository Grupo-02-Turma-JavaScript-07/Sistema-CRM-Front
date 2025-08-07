
export default interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  categoria?: Categoria[] | null;
}