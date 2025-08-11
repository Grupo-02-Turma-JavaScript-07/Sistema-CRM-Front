/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import type Usuario from "../../../models/Usuario";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import NavbarPerfil from "../../navbarperfil/NavbarPerfil";
import { toast } from "react-toastify";

function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])
    // #todo: fazer o state para os usuarios
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '', } as Categoria)
    const [usuario, setUsuario] = useState<Usuario>({ id: 0 } as Usuario);

    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()


    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            console.error(error);
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {

            console.error(error);
        }
    }

    // #todo: fazer o state para os usuarios
    async function buscarUsuarioPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario);
        } catch (error: any) {
            console.error(error);
        }
    }

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias)
        } catch (error: any) {
            console.error(error);
        }
    }

    // #todo: fazer o state para os usuarios
    async function buscarUsuarios() {
        try {
            await buscar("/usuarios", setUsuarios);
        } catch (error: any) {
            console.error(error);
        }
    }

    useEffect(() => {
        buscarCategorias()
        // #todo: fazer o state para os usuarios
        buscarUsuarios();

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])



    // # esse useEffect é para categoria
    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])


    // # esse useEffect é para produto
    useEffect(() => {
        setProduto({
            ...produto,
            usuario: usuario,
        });
    }, [usuario]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        const normalizado =
            name === "preco" || name === "quantidade"
                ? Number(value.replace(",", "."))
                : value;

        if (
            (name === "preco" || name === "quantidade") &&
            typeof normalizado === "number" &&
            normalizado < 0
        ) {
            toast.error("Impossível adicionar o preço com valor negativo.")
            return;
        }

        setProduto({
            ...produto,
            [name]: normalizado as any,
            categoria,
            usuario,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);

                toast.success("Produto atualizado com sucesso!");

            } catch (error: any) {
                console.error(error);
                toast.error("Erro ao atualizar o produto!");
            }

        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto)

                toast.success("Produto cadastrado com sucesso!");

            } catch (error: any) {
                console.error(error);
                toast.error("Deu algum erro para cadastrar o produto...");
            }
        }


        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';
    const carregandoUsuario = usuario.id === 0;

    return (
        <div className="container flex flex-col mx-auto items-center pt-20">
            {/* <div className="fixed top-0 left-0 w-full z-50">
                <NavbarPerfil />
            </div> */}
            <h1 className="text-4xl text-center mb-10">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Descrição do Produto</label>
                    <input
                        type="text"
                        placeholder="Descricação"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                {/* ##todo: novos campos para conseguir fazer o cadastro */}

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Preço</label>
                    <input
                        type="number"
                        placeholder="Preço"
                        name="preco"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Quantidade</label>
                    <input
                        type="number"
                        placeholder="Quantidade"
                        name="quantidade"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.quantidade}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Foto</label>
                    <input
                        type="text"
                        placeholder="Link da foto campeão"
                        name="foto"
                        className="border-2 border-slate-700 rounded p-2"
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Qual o Usuário</p>
                    <select name="usuario" id="usuario" className='border p-2 border-slate-800 rounded'
                        value={usuario.id || ""}
                        onChange={(e) => buscarUsuarioPorId(e.currentTarget.value)}
                    >
                        <option value="" disabled>Selecione um Usuário</option>
                        {usuarios.map((usuario) => (
                            <option key={usuario.id} value={usuario.id}>{usuario.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <p>Categoria do Produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded'
                        value={categoria.id || ""}
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" disabled>Selecione uma Categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>{categoria.descricao}</option>
                        ))}
                    </select>
                </div>

                <div className="flex gap-4 justify-end">
                    <button
                        type='submit'
                        className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                        text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                        disabled={carregandoCategoria || carregandoUsuario || isLoading}
                    >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                        }
                    </button>
                    <button
                        type="button"
                        className="ounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                        text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
                        onClick={retornar}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormProduto;
