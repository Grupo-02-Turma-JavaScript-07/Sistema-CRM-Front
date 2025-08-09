import type Produto from "../../../models/Produto";

interface CardProdutoProps{
    produto: Produto;
}

function CardProduto ( {produto} : CardProdutoProps ) {

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{produto.nome}</h5>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{produto.categoria?.descricao}</p>
                    </div>
                    <img className="w-16 h-16 rounded-xl" src="https://t4.ftcdn.net/jpg/04/62/88/97/360_F_462889752_tSWP7qDYpUIL6QRlbyIC8v68jaXwVXyx.jpg" alt="Imagem do produto" />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">R$ 599,00</span>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded dark:bg-green-200 dark:text-green-900">Disponível</span>
                </div>

                <div className="flex space-x-2">
                    <a href="#" className="w-full text-center text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">Ver detalhes</a>
                    <a href="#" className="w-full text-center text-sm text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md">Editar</a>
                </div>
            </div>
        </div>

    );
}

export default CardProduto;