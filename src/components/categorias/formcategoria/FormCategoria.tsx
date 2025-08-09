import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import { buscar, atualizar, cadastrar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";

function FormCategoria() {
    const navigate = useNavigate();

    const [categoriaState, setCategoriaState] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoriaState);
        } catch (error: any) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoriaState({
            ...categoriaState,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate("/categorias");
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoriaState, setCategoriaState);
                alert("A Categoria foi atualizada com sucesso!");
            } catch (error: any) {
                console.error(error);
                alert("Erro ao atualizar categoria: " + error.message);
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoriaState, setCategoriaState);
                alert("A Categoria foi cadastrada com sucesso!");
            } catch (error: any) {
                console.error(error);
                alert("Erro ao cadastrar categoria: " + error.message);
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoriaState.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 
                            hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
