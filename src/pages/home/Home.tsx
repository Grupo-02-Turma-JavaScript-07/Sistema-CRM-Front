import { Link } from 'react-router-dom'
import NavHome from '../../components/navbarHome/NavbarHome'

function Home() {
  return (
    <>
      <NavHome />
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
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
          <Link to="/produtos" className="bg-gradient-to-r from-[#8d34cc] to-[#c2a5d7] text-white px-5 py-2 rounded-lg font-medium shadow hover:opacity-90 transition">
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

export default Home
