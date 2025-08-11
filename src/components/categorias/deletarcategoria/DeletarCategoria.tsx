import { RotatingLines } from "react-loader-spinner";
import { buscar, deletar } from "../../../services/Service";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { FiTrash2, FiX } from "react-icons/fi";
import NavbarPerfil from "../../navbarperfil/NavbarPerfil";
import { toast } from "react-toastify";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      toast.success("Categoria deletada com sucesso");
      retornar();
    } catch (error) {
      toast.error("Erro ao deletar a categoria.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function retornar() {
    navigate("/categorias");
  }

return (
  <div className="flex flex-col justify-center items-center min-h-screen px-4">
    <div className="fixed top-0 left-0 w-full">
      <NavbarPerfil />
    </div>
    
    {/* Título e descrição fora do card */}
    <h1 className="text-2xl font-bold  text-gray-900 mb-2">
      Exclusão de Categoria
    </h1>
    <p className="text-gray-600 mb-6 text-center max-w-lg">
      Você confirma que deseja realmente remover esta categoria do sistema? Essa ação não poderá ser desfeita.
    </p>

    {/* Card */}
    <div className="bg-white border rounded-xl shadow-sm p-6 max-w-md w-full">
      {/* Cabeçalho */}
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-2xl font-bold text-gray-900">
          Categoria
        </h2>
      </div>

      {/* Subtítulo */}
      <p className="text-2xl text-gray-500 mb-4">
        {categoria.descricao || "Categoria"}
      </p>

      {/* Botões */}
      <div className="flex gap-2 justify-end ">
        <button
          type="button"
          onClick={retornar}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
        >
          <FiX size={16} />
          Cancelar
        </button>

        <button
          type="button"
          onClick={deletarCategoria}
          disabled={isLoading}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white transition"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          ) : (
            <>
              <FiTrash2 size={16} />
              Excluir
            </>
          )}
        </button>
      </div>
    </div>
  </div>
  );
}

export default DeletarCategoria;
