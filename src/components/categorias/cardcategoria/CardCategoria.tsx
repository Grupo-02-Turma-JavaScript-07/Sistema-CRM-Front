import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria"; // ajustar o caminho conforme seu projeto

interface CardCategoriasProps {
  categoria: Categoria;
}

export default function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border rounded-2xl overflow-hidden flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
      <header className="bg-indigo-800 text-white font-bold text-2xl py-3 px-6">
        Categoria
      </header>

      <main className="p-6 bg-slate-100 flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-800">{categoria.nome}</h3>
        <p className="text-gray-600">{categoria.descricao}</p>
      </main>

      <footer className="flex gap-2">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex-1 bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded flex justify-center items-center transition"
        >
          Editar
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex-1 bg-red-500 hover:bg-red-700 text-white py-2 rounded flex justify-center items-center transition"
        >
          Deletar
        </Link>
      </footer>
    </div>
  );
}
