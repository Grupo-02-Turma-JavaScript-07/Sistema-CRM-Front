import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        <div className="text-0">
          <h2 className="font-katibeh font-bold text-5xl mt-2 my-4 text-slate-800 ">
            Flow CRM
          </h2>
          <p>
            Plataforma moderna para gerenciar clientes, leads e vendas de forma
            inteligente.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-base font-semibold text-purple-400 mb-4">
            Explorar
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="Home" className="hover:text-purple-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Categorias
              </a>
            </li>
            <li>
              <a href="Planos" className="hover:text-purple-500">
                Planos
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-base font-semibold text-purple-400 mb-4">
            Para Vendedores
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-purple-500">
                Vitrine
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Produtos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-500">
                Suporte ao vendedor
              </a>
            </li>
          </ul>
        </div>

        <div className="text-right">
          <h3 className="text-base font-semibold text-purple-400 mb-4">
            Nos acompanhe
          </h3>
          <div className="flex justify-end gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/naah-carvalho/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <LinkedinLogo size={28} weight="bold" />
            </a>
            <a
              href="https://www.instagram.com/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <InstagramLogo size={28} weight="bold" />
            </a>
            <a
              href="https://www.facebook.com/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              <FacebookLogo size={28} weight="bold" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/80 py-6 border-t border-gray-100 bg-purple-900">
        &copy; {data} Flow CRM. Todos os direitos reservados.
      </div>
    </>
  );
}

export default Footer;
