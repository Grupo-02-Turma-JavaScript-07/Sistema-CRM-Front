import { Link, useLocation } from 'react-router-dom'
import { FaStore, FaTimes, FaBars } from 'react-icons/fa'
import { useState, useRef, useEffect } from "react";
import type Usuario from '../../models/Usuario';

function NavbarPerfil() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false) 
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [usuario] = useState<Usuario | null>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-start">
        <div className="flex items-center gap-2 text-slate-900 font-semibold">
          <FaStore className="text-2xl" />
          <Link
            to="/"
            className="font-katibeh text-4xl mb-3 md:text-5xl text-slate-800 hover:text-purple-400 transition"
          >
            Flow CRM
          </Link>
        </div>

        {/* Menu central no desktop */}
        <nav className="hidden md:flex items-center gap-6 text-lg font-medium mx-auto">
          <Link
            to="/"
            className={`px-3 py-1 rounded-md transition ${
              ['/produtos', '/perfil','/planos', '/categorias', '/home'].includes(location.pathname)
                ? 'bg-slate-100 text-purple-400'
                : 'text-slate-800 hover:text-purple-400'
            }`}
          >
            Home
          </Link>
          {/* <Link
            to="/planos"
            className="text-slate-800 hover:text-purple-400 transition"
          >
            Planos
          </Link> */}
          <Link
            to="/categorias"
            className="text-slate-800 hover:text-purple-400 transition"
          >
            Categorias
          </Link>
          <Link
            to="/produtos"
            className="text-slate-800 hover:text-purple-400 transition"
          >
            Produtos
          </Link>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl text-slate-800 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

            {/* Foto Usuário (visível sempre) */}
            <div className="ml-4 relative" ref={dropdownRef}>
            <button
                onClick={() => setOpen(!open)}
                className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
                <span className="sr-only">Abrir menu do usuário</span>
                <img
                className="w-10 h-10 rounded-full outline -outline-offset-1 outline-white/10"
                src={usuario?.foto || "https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-gris.png"}
                alt={`Foto de perfil de ${usuario?.nome}`}
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5">
                <Link to="/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Meu Perfil
                </Link>
                <Link to="/home" className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100">
                    Sair
                </Link>
                </div>
            )}
            </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`px-3 py-2 rounded-md text-left w-full transition ${
              ['/produtos', '/perfil','/planos', '/categorias', '/home'].includes(location.pathname)
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
            to="/categorias"
            onClick={() => setMenuOpen(false)}
            className="text-slate-800 hover:text-purple-400 transition"
          >
            Categorias
          </Link>
          <Link
            to="/produtos"
            onClick={() => setMenuOpen(false)}
            className="text-slate-800 hover:text-purple-400 transition"
          >
            Produtos
          </Link>
        </div>
      )}
    </header>
  )
}

export default NavbarPerfil
