export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  foto:string;
  produto?: Produto[] | null;
}