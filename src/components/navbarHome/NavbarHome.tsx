import { Link, useLocation } from 'react-router-dom'
import { FaStore, FaSignInAlt } from 'react-icons/fa'

function NavHome() {
  const location = useLocation()

  return (
    <header className="bg-white shadow-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
      <div className="flex items-center gap-2 text-slate-900 font-semibold text-2xl">
        <FaStore className="text-2xl" />
        Flow CRM
      </div>
      <nav className="flex items-center gap-6 text-2x1 font-medium">
        <Link to="/" className={`px-3 py-1 rounded-md transition ${
            location.pathname === '/'
              ? 'bg-slate-100 text-purple-400'
              : 'text-slate-800 hover:text-purple-400'
          }`}
        >
          Home
        </Link>

        {/* #todo: rota será planos? */}
        <Link to="/planos" className="text-slate-800 hover:text-purple-400 transition">Planos</Link>

        {/* #todo: rota será cadastro? */}
        <Link to="/cadastro" className="text-slate-800 hover:text-purple-400 transition">Cadastro</Link>
      </nav>

      <Link to="/login" className="flex items-center gap-2 bg-purple-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
        <FaSignInAlt />
        Entrar
      </Link>
      </div>
    </header>
  )
}

export default NavHome
