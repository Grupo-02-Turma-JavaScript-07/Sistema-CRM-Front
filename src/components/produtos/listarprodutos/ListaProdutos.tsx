import { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import type Produto from "../../../models/Produto";
import CardProduto from "../cardprodutos/CardProduto";
import ModalProduto from "../modalprodutos/ModalProduto";

interface ListaProdutosProps {
  precoMin?: number;
  precoMax?: number;
}

function ListaProdutos({ precoMin, precoMax }: ListaProdutosProps) {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    async function buscarProdutos() {
        try {
            setIsLoading(true);
            await buscar('/produtos', setProdutos);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error("Erro ao buscar produtos", error);
        } finally {
            // O loader fica visível por pelo menos 2s
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    const produtosFiltrados = produtos.filter((p) => {
    if (precoMin !== undefined && p.preco < precoMin) return false;
    if (precoMax !== undefined && p.preco > precoMax) return false;
    return true;
    });

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <FallingLines color="#A020F0" width="100" visible={true} />
                </div>
            ) : (
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col mx-2">
                        <div className="flex justify-end items-center">
                            <ModalProduto/>
                        </div>
                        <div className='container mx-auto my-4 
                            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                        >
                            {produtosFiltrados.map((produto) => (
                                <CardProduto key={produto.id} produto={produto} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ListaProdutos;
