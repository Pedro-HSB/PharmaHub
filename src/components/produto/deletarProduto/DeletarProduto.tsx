import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Produto from '../../../models/Produto'
import { buscar, deletar } from '../../../service/Service'
import { ToastAlert } from '../../../utils/ToastAlert'

function DeletarProduto() {
    const [Produto, setProduto] = useState<Produto>({} as Produto)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()


    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            ToastAlert('Tente novamente Mais Tarde', "info")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/produtos")
    }

    async function deletarProduto() {
        try {
            await deletar(`/produtos/${id}`)

            ToastAlert('Produto apagado com sucesso', "sucesso")

        } catch (error) {
            ToastAlert('Erro ao apagar o Produto', "erro")
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o Produto a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-emerald-400 text-white font-bold text-2xl'>Produto</header>
                <div className='bg-emerald-200'>
                    <p className='p-8 text-3xl flex h-full'><img src={Produto.foto} className='h-28 mr-8 rounded-full ' alt="" />{Produto.nome}</p>
                    <p className='p-8 text-3xl h-full'>Preco: {Produto.preco}</p>
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-emerald-400 hover:bg-emerald-800 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-red-400 hover:bg-red-700 flex items-center justify-center' onClick={deletarProduto}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto