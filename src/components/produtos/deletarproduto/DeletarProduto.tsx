/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Produto from "../../../models/Produto"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"
import { FiTrash2, FiX } from "react-icons/fi"
import { toast } from "react-toastify"

function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any){
             if (error.toString().includes('403')) {
                console.error(error);
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)
            toast.success("Mandei pro lixo com sucesso!")
        } catch (error: any) {
            if (error.toString().includes('401')) {
                console.error(error);
            }else {
                toast.error("Deu algo errado aqui mermão..")
            }
        }
        setIsLoading(false)
    }

    function retornar() {
        navigate("/produtos")
    }
    
    return (
        <div className="flex flex-col justify-center items-center min-h-screen px-4">
            {/* <div className="fixed top-0 left-0 w-full">
            <NavbarPerfil />
            </div> */}
            <h1 className='text-3xl font-bold  text-gray-900 mb-2'>Deletar Produto</h1>

            <p className='text-gray-600 mb-6 text-center max-w-lg'>
                Você tem certeza de que deseja apagar o produto a seguir do sistema? Essa ação não poderá ser desfeita.
            </p>

             <div className='bg-white border rounded-xl shadow-sm p-6 max-w-2xl w-full leading-relaxed'>
                {/*
                <header className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                {produto.nome}
                <span className="text-xl text-gray-500 dark:text-gray-400">
                    ({produto.categoria?.descricao})
                </span>
                </header> */}

                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h5 className="text-xl font-semibold text-gray-900 dark:text-white">{produto.nome}</h5>
                        <p className="text-lg text-gray-500 dark:text-gray-400">{produto.categoria?.descricao}</p>
                    </div>
                    <img className="w-16 h-16 rounded-xl" src="https://t4.ftcdn.net/jpg/04/62/88/97/360_F_462889752_tSWP7qDYpUIL6QRlbyIC8v68jaXwVXyx.jpg" alt="Imagem do produto" />
                </div>

                <hr className="text-gray-300 "></hr>
                <div className="text-2xl text-gray-500 mt-2 mb-4">
                    {/* <p className='text-2xl h-full'>Nome: {produto.nome}</p> */}
                    <p>{produto.descricao}</p>
                    <p>Preço: {produto.preco}</p>
                    <p>Quantidade: {produto.quantidade}</p>
                </div>
                <div className="flex gap-2 justify-end ">
                    <button 
                        className='flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition'
                        onClick={retornar}>
                        <FiX size={16} />
                        Cancelar
                    </button>
                    <button 
                        className='flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white transition'
                        onClick={deletarProduto}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <>
                            <FiTrash2 size={16} />
                             Excluir
                            </>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto