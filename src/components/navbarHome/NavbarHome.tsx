import { Link, useLocation } from 'react-router-dom'
import { FaStore, FaSignInAlt, FaTimes, FaBars } from 'react-icons/fa'
import { useState } from 'react'

function NavHome() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false) 

  return (
    <header className="bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-slate-900 font-semibold ">
        <FaStore className="text-2xl" />
        <Link to="/" className="font-katibeh text-5xl md:text-5xl mt-5 text-slate-800 hover:text-purple-400 transition">Flow CRM</Link>
      </div>

       {/* Botão Mobile Responsivo*/}
        <button
          className="md:hidden text-2xl text-slate-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      <nav className="hidden md:flex items-center gap-6 text-lg font-medium">
        <Link to="/" className={`px-3 py-1 rounded-md transition ${
        //adicionei mais rotas para o botão Home ficar personalizado em todas as visualizações
            ['/produtos','/planos', '/'].includes(location.pathname)
              ? 'bg-slate-100 text-purple-400'
              : 'text-slate-800 hover:text-purple-400'
          }`}
        >
          Home
        </Link>

        <Link to="/planos" className="text-slate-800 hover:text-purple-400 transition">Planos</Link>

        {/* #todo: rota será cadastro? */}
        <Link to="/cadastro" className="text-slate-800 hover:text-purple-400 transition">Cadastro</Link>
      </nav>

      <Link to="/login" className="hidden md:flex items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
        <FaSignInAlt />
        Entrar
      </Link>
      </div>

      {/* Menu Mobile Dropdown Responsivo*/}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`px-3 py-2 rounded-md transition ${
              //adicionei mais rotas para o botão Home ficar personalizado em todas as visualizações
            ['/produtos','/planos', '/'].includes(location.pathname)
                ? 'bg-slate-100 text-purple-400'
                : 'text-slate-800 hover:text-purple-400'
            }`}
          >
            Home
          </Link>

          <Link
            to="/planos"
            onClick={() => setMenuOpen(false)}
            className="text-slate-800 hover:text-purple-400 transition"
          >
            Planos
          </Link>

          <Link
            to="/cadastro"
            onClick={() => setMenuOpen(false)}
            className="text-slate-800 hover:text-purple-400 transition"
          >
            Cadastro
          </Link>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
          >
            <FaSignInAlt />
            Entrar
          </Link>
        </div>
      )}
    </header>
  )
}

export default NavHome
