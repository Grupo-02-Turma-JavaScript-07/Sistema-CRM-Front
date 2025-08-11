import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface CardCategoriasProps {
  categoria: Categoria;
}

export default function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border rounded-xl shadow-sm p-4 flex flex-col gap-2 w-full max-w-sm">
      <div className="flex justify-between items-start">
        <h2 className="text-lg font-bold text-gray-900">Categoria</h2>
        <span className="text-gray-700 font-semibold">ID: {categoria.id}</span>
      </div>

      <p className="text-sm text-gray-600">{categoria.descricao}</p>

      <div className="flex gap-2 mt-2">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <FiEdit2 />
          Atualizar
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <FiTrash2 />
          Excluir
        </Link>
      </div>
    </div>
  );
}
