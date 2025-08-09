import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavHome from "../../components/navbarHome/NavbarHome";
import { cadastrar } from "../../services/Service";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  foto: string;
  perfil: string;
}

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const [senhaValida, setSenhaValida] = useState(true);

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    email: "",
    senha: "",
    foto: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    perfil: "CLIENTE",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      navigate("/login");
    }
  }, [usuario, navigate]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    if (name === "senha") {
      setSenhaValida(value.length >= 8);
    }

    setUsuario({
      ...usuario,
      [name]: value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!senhaValida) {
      toast.warn("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    if (confirmaSenha !== usuario.senha) {
      toast.warn("As senhas não conferem.");
      return;
    }

    setIsLoading(true);

    const usuarioParaCadastro = {
      ...usuario,
      foto:
        usuario.foto.trim() !== ""
          ? usuario.foto.trim()
          : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };

    try {
      await cadastrar(`/usuarios`, usuario, usuarioParaCadastro, setUsuario);
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error: any) {
      toast.error(
        "Erro ao cadastrar o usuário: " 
      );
    }

    setIsLoading(false);
  }

  return (
    <>
      <NavHome />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          onSubmit={cadastrarNovoUsuario}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl"
        >
          <h1 className="text-2xl font-bold mb-6">Cadastro de usuário</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                value={usuario.nome}
                onChange={atualizarEstado}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email / Usuário</label>
              <input
                type="email"
                name="email"
                value={usuario.email}
                onChange={atualizarEstado}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Senha</label>
              <input
                type="password"
                name="senha"
                value={usuario.senha}
                onChange={atualizarEstado}
                className={`w-full rounded-md px-3 py-2 border ${
                  senhaValida ? "border-gray-300" : "border-red-500"
                }`}
              />
              {!senhaValida && (
                <p className="text-red-500 text-sm mt-1">
                  A senha deve ter no mínimo 8 caracteres.
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Confirmar Senha</label>
              <input
                type="password"
                name="confirmarSenha"
                value={confirmaSenha}
                onChange={handleConfirmarSenha}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Foto (URL)</label>
              <input
                type="url"
                name="foto"
                value={usuario.foto}
                placeholder="https://..."
                onChange={atualizarEstado}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1 font-medium">Perfil</label>
            <select
              name="perfil"
              value={usuario.perfil}
              onChange={atualizarEstado}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="CLIENTE">Cliente</option>
              <option value="ADMIN">Administrador</option>
              <option value="GERENTE">Gerente</option>
              <option value="VENDEDOR">Vendedor</option>
            </select>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="px-6 py-2 rounded-md text-white bg-red-400 hover:bg-red-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 flex justify-center items-center"
            >
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                "Cadastrar"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
