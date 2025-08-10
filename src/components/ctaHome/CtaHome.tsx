import { Link } from "react-router-dom"

function CtaHome() {
  return (
    <>
      <section className="flex flex-col border-inl border-purple-400 items-center justify-center text-center px-4 py-20">
        <span className="text-sm font-medium text-slate-500 mb-4 border border-slate-200 px-3 py-1 rounded-full">
          Seu marketplace moderno
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Descubra, gerencie e venda <br />
          com elegância
        </h1>
        <p className="text-slate-500 max-w-xl text-ms mb-8">
          Navegue por categorias, explore a vitrine por vendedor e cadastre usuários em uma interface rápida e bonita.
        </p>
        <div className="flex gap-4 mb-6">
          <Link to="/planos" className="bg-gradient-to-r from-[#62268d] to-[#9d5ec9] hover:from-[#9d5ec9] hover:to-[#62268d] text-white px-5 py-2 rounded-lg font-medium shadow hover:opacity-90 transition">
            Explorar produtos
          </Link>
          {/* #todo: vamos usar uma rota para planos?? */}
          <Link to="/vendedores" className="bg-white text-slate-700 border border-slate-300 px-5 py-2 rounded-lg font-medium shadow hover:bg-slate-50 transition">
            Vitrine por vendedor
          </Link>
        </div>
        <div className="text-slate-500 text-sm flex items-center gap-2">
          <span>🔍</span>
          <span>Pesquisar rapidamente na lista de produtos</span>
        </div>
      </section>
    </>
  )
}

export default CtaHome
