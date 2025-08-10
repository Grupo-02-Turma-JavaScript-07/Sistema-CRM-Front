import React from 'react'
import NavbarPerfil from '../../components/navbarperfil/NavbarPerfil'

function Perfil() {
  return (
    <>
    <NavbarPerfil />
    <div className='bg-[#FAF5FF] min-h-screen p-8'>
      Aqui está o GRID
      <div className='max-w-6xl bg-purple-300 container mx-auto grid grid-cols-1 md:grid-cols-3'>
        <div className='bg-white col-span-1 rounded-lg shadow p-6'>
          <div className='flex flex-col items-center'>
            <img 
              src="https://randomuser.me/api/portraits/women/86.jpg"
              alt="Elisa Mendes"
              className='w-24 h-24 rounded-full object-cover mb-4' 
            />
            <h2 className='text-xl font-semibold'>Elisa Mendes</h2>
            <p className='text-sm'>elisamendes@email.com</p>
            <div className='flex space-x-4'>
              <button 
                className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out'>
                Editar
              </button>
              <button
                className='bg-white border border-gray-300 text-[#C27AFF] hover:bg-[#F1F5F9] font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out'
              >
                Mensagens
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Perfil