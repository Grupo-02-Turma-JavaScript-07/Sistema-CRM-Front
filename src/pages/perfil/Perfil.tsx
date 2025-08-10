import NavbarPerfil from '../../components/navbarperfil/NavbarPerfil'
import { useState } from 'react';
import type Usuario from '../../models/Usuario';
import { FaEdit } from 'react-icons/fa';

function Perfil() {

  const [usuario, setUsuario] = useState<Usuario>({
      id: 10,
      nome: "Elisa Mendes",
      email: "lisamendes@email.com",
      senha: "senhaelisa002",
      foto: "https://randomuser.me/api/portraits/women/86.jpg",
      perfil: "Gerente",
    });
    
  return (
    <>
    <NavbarPerfil />
    <div className='bg-white min-h-screen p-8'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='col-span-1 bg-white rounded-lg shadow p-6 self-start'>
          <div className='flex flex-col items-center'>
            <img 
              src="https://randomuser.me/api/portraits/women/86.jpg"
              alt={usuario.nome}
              className='w-24 h-24 rounded-full object-cover mb-4' 
            />
            <h2 className='text-xl font-semibold text-gray-900'>{usuario.nome}</h2>
            <p className='text-sm text-gray-500 mb-6'>{usuario.email}</p>
            <div className='flex  justify-center flex-wrap space-x-2 w-full gap-y-4'>
              <button 
                className='flex items-center gap-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out'>
                <FaEdit/>
                Editar
              </button>
              <button
                className='flex items-center bg-white border border-gray-300 text-[#C27AFF] hover:bg-[#F1F5F9] font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out'
              >
                Mensagens
              </button>
            </div>
          </div>
        </div>
        <div className='col-span-2 space-y-8'>
          <div className='bg-white rounded-lg shadow p-6'>
            <h3 className='text-purple-500 text-xl font-bold'>Informações gerais</h3>
            <p className='text-sm text-gray-500 mb-4'>Dados da conta</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4'>
              <div>
                <span className='text-gray-500 text-sm'>Nome</span>
                <p className='text-gray-900 font-medium'>{usuario.nome}</p>
              </div>
              <div>
                <span className='text-gray-500 text-sm'>E-mail</span>
                <p className='text-gray-900 font-medium'>{usuario.email}</p>
              </div>
              <div>
                <span className='text-gray-500 text-sm'>Organização</span>
                <p className='text-gray-900 font-medium'>Acme S.A</p>
              </div>
              <div>
                <span className='text-gray-500 text-sm'>Cargo</span>
                <p className='text-gray-900 font-medium'>Gerente</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Cidade</span>
                <p className="text-gray-900 font-medium">São Paulo, BR</p>
              </div>
            </div>
          </div>
          {/* Alguma tabela: Talvez o tipo de plano selecionado pelo cliente? */}
          <div className='bg-white rounded-lg shadow p-6'>
            <h3 className='text-purple-500 text-xl font-bold mb-4'>Plano contratado</h3>
            <p className='text-gray-900 font-medium'>Corporativo</p>
            <span className='text-gray-500 text-sm text-justify'>Solução completa com suporte prioritário, integrações e tudo para escalar suas vendas.</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Perfil