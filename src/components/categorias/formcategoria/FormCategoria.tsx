/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import NavbarPerfil from "../../navbarperfil/NavbarPerfil";

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
  <div className="container flex flex-col items-center mx-auto pt-20">
    <div className="fixed top-0 left-0 w-full z-50">
                <NavbarPerfil />
                </div>
            <h1 className="text-3xl font-semibold text-left my-5">
                {id === undefined ? "Nova Categoria" : "Editar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        placeholder="Ex: Tecnologia"
                        name="descricao"
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoriaState.descricao || ""}
                        onChange={atualizarEstado}
                    />
                </div>
                <div className="flex gap-4 justify-end">
                    <button
                        className="px-6 py-2 rounded-md gap-2 text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 flex justify-center items-center"
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

                    <button
                        type="button"
                        className="px-6 py-2 rounded-md border border-gray-300 bg-white text-gray-700 font-semibold hover:bg-gray-100 flex justify-center items-center"
                        onClick={retornar}
                    >
                        Cancelar
                    </button>
                    </div>

        </form>
        </div>
    );
}

export default FormCategoria;
