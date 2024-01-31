import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { ToastAlert } from "../../../utils/ToastAlert";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function FormCategoria() {

    const navigate = useNavigate();

    const [Categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/Categorias/${id}`, setCategoria,)
        } catch (error: any) {
            ToastAlert('Tente novamente Mais Tarde', "info")

        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...Categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/Categorias")
    }

    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, Categoria, setCategoria)
                ToastAlert('O Categoria foi atualizado com sucesso!', "sucesso")
            } catch (error: any) {
                ToastAlert('Erro ao atualizar o Categoria.', "erro")
            }

        } else {
            try {
                await cadastrar(`/categorias`, Categoria, setCategoria)
                ToastAlert('O Categoria foi cadastrado com sucesso!', "sucesso")
            } catch (error: any) {
                ToastAlert('Erro ao cadastrar o Categoria.', "erro")
            }

        }
        setIsLoading(false)
        retornar()
    }


    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu Categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={Categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-red-400 
                               hover:bg-red-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">

                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }

                </button>
            </form>
        </div>
    );
}

export default FormCategoria;