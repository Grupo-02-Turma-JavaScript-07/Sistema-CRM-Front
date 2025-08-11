import { useState, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import NavbarHome from "../../components/navbarHome/NavbarHome";
import { toast } from "react-toastify";

interface UsuarioLogin {
  email: string;
  senha: string;
}

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({
    email: "",
    senha: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUsuarioLogin((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // como não temos uma função getByEmail no backend, não conseguimos buscar
      // o email que o usuario digitou para fazer login de verdade 😔
      if (usuarioLogin.email === "admin@exemplo.com" && usuarioLogin.senha === "123") {
        toast.success("Login realizado com sucesso!");
        navigate("/produtos");
      } else {
        toast.success("Login realizado com sucesso!");
        navigate("/produtos");

        //alterar para toast.sucess e adicionar o /navigate /produtos
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <NavbarHome />
      <main className="min-h-screen flex items-center justify-center bg-purple-50">
        <section className="container max-w-md">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">

            <form onSubmit={onSubmit} className="space-y-4">
              <h1 className="text-2xl font-bold mb-6">Acessar conta</h1>
              <div className="space-y-2">
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Digite seu email"
                  value={usuarioLogin.email}
                  onChange={atualizarEstado}
                  autoComplete="email"
                  className="w-full rounded-md px-3 py-2 border 
                  focus:outline-none focus:ring-2 focus:ring-purple-400 
                  focus:border-purple-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="senha" className="block text-sm font-medium 
                text-gray-700">
                  Senha
                </label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={usuarioLogin.senha}
                  onChange={atualizarEstado}
                  autoComplete="current-password"
                  className="w-full rounded-md px-3 py-2 border 
                  focus:outline-none focus:ring-2 focus:ring-purple-400 
                  focus:border-purple-600"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 rounded-md text-white font-semibold 
                bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 
                flex justify-center items-center"
              >
                {isLoading ? (
                  <>
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="20"
                      visible
                    />
                    Entrando...
                  </>
                ) : (
                  "Entrar"
                )}
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500">
              Ainda não tem conta?{" "}
              <Link to="/cadastro" className="underline text-indigo-600 hover:text-indigo-800">
                Cadastre-se
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
    
  );
}

export default Login;