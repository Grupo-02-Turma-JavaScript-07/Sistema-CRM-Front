import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalCategoria.css';
import FormCategoria from '../formcategoria/FormCategoria';
import { FiPlus } from 'react-icons/fi';

function ModalCategoria() {
  return (
    <>
    <Popup
      trigger={
        <button
          className="px-6 py-2 rounded-md gap-2 text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 flex justify-center items-center"
        >
          <FiPlus />
          Cadastrar Categoria
        </button>
      }
      modal
    >
    <FormCategoria />
</Popup>

    </>
  );
}

export default ModalCategoria;
