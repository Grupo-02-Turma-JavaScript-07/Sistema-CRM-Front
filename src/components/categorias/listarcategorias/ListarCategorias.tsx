import { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import ModalCategoria from "../modalCategoria/ModalCategoria";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarCategorias = async () => {
      const start = Date.now();

      try {
        await buscar("/categorias", setCategorias);
      } catch (err) {
        console.error("Erro ao buscar categorias:", err);
      } finally {
        const delay = Math.max(0, 2000 - (Date.now() - start));
        setTimeout(() => setLoading(false), delay);
      }
    };

    buscarCategorias();
  }, []);

  return (
    <div className="p-6 mt-10">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <FallingLines color="#A020F0" width="100" visible={true}/>
        </div>
      ) : (
        <div className="bg-white shadow rounded-lg p-4 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-bold">Categorias</h2>
            <ModalCategoria />
          </div>

          <ul className="divide-y divide-gray-200">
            <li className="flex justify-between items-center py-3 font-medium text-gray-500">
              <span>Descrição</span>
              <span>Ações</span>
            </li>

            {categorias.map((categoria) => (
              <li
                key={categoria.id}
                className="flex justify-between items-center py-3"
              >
                <span>{categoria.descricao}</span>
                <div className="flex gap-2">
                  <Link
                    to={`/editarcategoria/${categoria.id}`}
                    className="flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-md transition"
                  >
                    <FiEdit2 />
                    Atualizar
                  </Link>
                  <Link
                    to={`/deletarcategoria/${categoria.id}`}
                    className="flex items-center gap-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition"
                  >
                    <FiTrash2 />
                    Excluir
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListarCategorias;
