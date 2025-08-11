import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalProduto.css';
import FormProduto from '../formproduto/FormProduto';
import { FiPlus } from 'react-icons/fi';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                    className="px-6 py-2 mx-9 rounded-md gap-2 text-white font-semibold bg-gradient-to-r
                    from-indigo-500 to-purple-500 hover:opacity-90 flex justify-center items-center"
                    >
                        <FiPlus />                
                        Cadastrar Produto
                    </button>
                }
                modal
            >
                <FormProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;